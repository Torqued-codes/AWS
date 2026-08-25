#!/usr/bin/env node
// Groq API key environment setup helper.
//
// Runs automatically on `npm install` (via the "postinstall" script) and
// can also be run manually with `npm run setup:groq`. It:
//   1. Detects whether this project is Vite, Next.js, or Create React App.
//   2. Figures out the correct env var name/prefix for that framework.
//   3. Prints clear, copy-pasteable setup instructions.
//   4. Seeds (or updates) .env.example with a placeholder line — it never
//      touches a real .env file, so no secrets are ever overwritten.

import { existsSync, readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function readJson(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch {
    return null;
  }
}

function detectFramework() {
  const pkg = readJson(path.join(rootDir, 'package.json')) || {};
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

  if (existsSync(path.join(rootDir, 'next.config.js')) || existsSync(path.join(rootDir, 'next.config.mjs')) || deps.next) {
    return {
      name: 'Next.js',
      envVar: 'NEXT_PUBLIC_GROQ_API_KEY',
      docsHint: 'Next.js only exposes env vars to the browser when prefixed with NEXT_PUBLIC_.',
    };
  }

  if (deps['react-scripts']) {
    return {
      name: 'Create React App',
      envVar: 'REACT_APP_GROQ_API_KEY',
      docsHint: 'CRA only exposes env vars to the browser when prefixed with REACT_APP_.',
    };
  }

  if (
    existsSync(path.join(rootDir, 'vite.config.ts')) ||
    existsSync(path.join(rootDir, 'vite.config.js')) ||
    deps.vite
  ) {
    return {
      name: 'Vite',
      envVar: 'VITE_GROQ_API_KEY',
      docsHint: 'Vite only exposes env vars to the browser when prefixed with VITE_.',
    };
  }

  // Fallback — default to Vite's convention since that's what this repo uses.
  return {
    name: 'Unknown (defaulting to Vite convention)',
    envVar: 'VITE_GROQ_API_KEY',
    docsHint: 'Could not confidently detect the framework — assuming Vite.',
  };
}

function ensureEnvExampleHasKey(envVar) {
  const envExamplePath = path.join(rootDir, '.env.example');
  const placeholderLine = `${envVar}=gsk_your_groq_api_key_here`;

  if (!existsSync(envExamplePath)) {
    writeFileSync(
      envExamplePath,
      `# Groq API key — used by the AI-powered Bulk Question Importer\n# Get a free key at https://console.groq.com/keys\n${placeholderLine}\n`,
      'utf-8'
    );
    return 'created';
  }

  const existing = readFileSync(envExamplePath, 'utf-8');
  if (existing.includes(envVar)) {
    return 'already-present';
  }

  appendFileSync(
    envExamplePath,
    `\n# Groq API key — used by the AI-powered Bulk Question Importer\n# Get a free key at https://console.groq.com/keys\n${placeholderLine}\n`
  );
  return 'appended';
}

function checkRealEnvFile(envVar) {
  const envPath = path.join(rootDir, '.env');
  if (!existsSync(envPath)) return { exists: false, hasKey: false };
  const content = readFileSync(envPath, 'utf-8');
  const hasKey = new RegExp(`^${envVar}=.+$`, 'm').test(content) && !content.includes(`${envVar}=gsk_your_groq_api_key_here`);
  return { exists: true, hasKey };
}

function main() {
  const framework = detectFramework();
  const exampleResult = ensureEnvExampleHasKey(framework.envVar);
  const realEnv = checkRealEnvFile(framework.envVar);

  const divider = '─'.repeat(64);

  console.log('\n' + divider);
  console.log('🤖  AWSxCYNERGY Admin Console — Groq AI Importer Setup');
  console.log(divider);
  console.log(`Detected framework : ${framework.name}`);
  console.log(`Env var to set     : ${framework.envVar}`);
  console.log(`Note               : ${framework.docsHint}`);
  console.log(
    exampleResult === 'created'
      ? '.env.example       : created with a placeholder line ✅'
      : exampleResult === 'appended'
      ? '.env.example       : placeholder line appended ✅'
      : '.env.example       : placeholder already present ✅'
  );

  if (realEnv.hasKey) {
    console.log('.env                : key already set — Bulk Import is ready to use ✅');
  } else {
    console.log('\nNext steps to enable the AI-powered Bulk Question Importer:');
    console.log(`  1. Get a free Groq API key: https://console.groq.com/keys`);
    console.log(`  2. In the project root, ${realEnv.exists ? 'open' : 'create'} a file named ".env"`);
    console.log(`  3. Add this line to it:`);
    console.log(`\n       ${framework.envVar}=gsk_your_actual_key_here\n`);
    console.log(`  4. Restart your dev server (npm run dev) so the new env var is picked up.`);
    console.log(`\n  (No key yet? You can also paste one directly into the admin panel's`);
    console.log(`   "Bulk Import (PDF/DOCX)" tab — it has a fallback key input field for`);
    console.log(`   quick local testing, stored only in your browser's localStorage.)`);
  }

  console.log(divider + '\n');
}

main();

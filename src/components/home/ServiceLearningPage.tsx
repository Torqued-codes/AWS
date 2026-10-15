import React, { useState } from 'react';
import {
  ArrowLeft, ExternalLink, BookOpen, CheckCircle2, XCircle, RotateCcw,
  BrainCircuit, BarChart3, Code2, ShieldCheck, Database, Link2, Cpu,
  Network, Building2, Settings, RadioTower, Zap, GraduationCap,
} from 'lucide-react';

type ServiceQuestion = {
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
};
type ServiceInfo = {
  description: string;
  resourceTitle: string;
  resourceUrl: string;
  resourceNote: string;
  questions: [ServiceQuestion, ServiceQuestion, ServiceQuestion];
};

export const SERVICE_LEARNING: Record<string, ServiceInfo> = {
  'AI/ML': {
    description: 'Explore artificial intelligence, machine learning, and generative AI concepts on AWS.',
    resourceTitle: 'AWS AI learning resources',
    resourceUrl: 'https://aws.amazon.com/training/learn-about/machine-learning/',
    resourceNote: 'Official AWS machine-learning learning plan. AWS provides free digital courses; paid labs, subscriptions, and running AWS resources may cost extra.',
    questions: [
      { question: 'Which AWS service helps developers build, train, and deploy machine-learning models?', options: ['Amazon SageMaker', 'Amazon Route 53', 'AWS Artifact', 'Amazon EBS'], answer: 0, explanation: 'Amazon SageMaker provides tools for building, training, and deploying machine-learning models.' },
      { question: 'What is a common use of generative AI?', options: ['Assigning IP addresses only', 'Generating new text, images, or other content', 'Replacing every database', 'Physically repairing servers'], answer: 1, explanation: 'Generative AI models can create new content such as text, images, and code.' },
      { question: 'In a typical supervised-learning workflow, what does a model learn from?', options: ['Only unlabeled random data', 'Network security groups', 'Examples containing inputs and target labels', 'Billing invoices only'], answer: 2, explanation: 'Supervised learning uses labeled examples to learn a mapping from inputs to target outputs.' },
    ],
  },
  Analytics: {
    description: 'Learn how AWS analytics services collect, process, query, and visualize data.',
    resourceTitle: 'AWS analytics learning resources',
    resourceUrl: 'https://aws.amazon.com/training/learn-about/data-analytics/',
    resourceNote: 'Official AWS data analytics learning plan and courses. Free digital learning is available; some labs or hands-on analytics resources can incur charges.',
    questions: [
      { question: 'Which AWS service is a serverless, interactive query service for data in Amazon S3?', options: ['Amazon Athena', 'Amazon Route 53', 'AWS IAM', 'Amazon EC2 Auto Scaling'], answer: 0, explanation: 'Amazon Athena lets you run SQL queries directly against data stored in Amazon S3 without managing query infrastructure.' },
      { question: 'Which service is designed for building and operating a data warehouse?', options: ['AWS WAF', 'Amazon Redshift', 'Amazon SNS', 'AWS CloudTrail'], answer: 1, explanation: 'Amazon Redshift is AWS’s cloud data-warehouse service for analytics workloads.' },
      { question: 'What is a primary purpose of data visualization?', options: ['Encrypting every object automatically', 'Creating subnets', 'Making patterns and trends easier to understand', 'Provisioning virtual machines'], answer: 2, explanation: 'Charts and dashboards help people interpret metrics, patterns, and trends in data.' },
    ],
  },
  'Developer Tools': {
    description: 'Explore tools for source control, build automation, deployment, and developer workflows on AWS.',
    resourceTitle: 'AWS developer tools',
    resourceUrl: 'https://aws.amazon.com/training/learn-about/developer/',
    resourceNote: 'Official AWS Developer Learning Plan and course directory. Free digital learning is available; some labs or deployed resources may require payment.',
    questions: [
      { question: 'What is the main purpose of a CI/CD pipeline?', options: ['Automatically build, test, and deliver software changes', 'Physically cool a data center', 'Replace all source code with logs', 'Create user passwords manually'], answer: 0, explanation: 'CI/CD automates integration, testing, and delivery or deployment of software changes.' },
      { question: 'Why do teams use version control such as Git?', options: ['To increase network latency', 'To track and collaborate on source-code changes', 'To store only video files', 'To replace application monitoring'], answer: 1, explanation: 'Version control records changes and supports collaboration, branching, and history.' },
      { question: 'Which AWS service provides managed source control, build, and deployment capabilities in a developer workflow?', options: ['Amazon Polly', 'AWS IoT Core', 'AWS CodeBuild', 'Amazon EFS'], answer: 2, explanation: 'AWS CodeBuild compiles source code, runs tests, and produces deployable artifacts.' },
    ],
  },
  Security: {
    description: 'Practice identity, access control, encryption, monitoring, and shared-responsibility fundamentals.',
    resourceTitle: 'AWS security learning resources',
    resourceUrl: 'https://aws.amazon.com/training/learn-about/security/',
    resourceNote: 'Official AWS Security Learning Plan and course listings. Free digital learning is available; some advanced labs and subscriptions may cost extra.',
    questions: [
      { question: 'What does the principle of least privilege mean?', options: ['Give every user administrator access', 'Grant only the permissions needed to perform a task', 'Share root credentials with the team', 'Disable all audit logs'], answer: 1, explanation: 'Least privilege limits permissions to what a user or workload needs.' },
      { question: 'Which AWS service is primarily used to manage identities and permissions?', options: ['Amazon Athena', 'Amazon CloudFront', 'AWS Identity and Access Management (IAM)', 'Amazon S3 Glacier'], answer: 2, explanation: 'IAM manages users, roles, policies, and access to AWS resources.' },
      { question: 'Under the AWS shared responsibility model, who is responsible for configuring customer IAM permissions?', options: ['The customer', 'Only the internet provider', 'AWS hardware vendors only', 'No one'], answer: 0, explanation: 'AWS secures the cloud infrastructure; customers remain responsible for security configuration in their AWS environment, including permissions.' },
    ],
  },
  Storage: {
    description: 'Understand object, block, and file storage and how to choose the right option for a workload.',
    resourceTitle: 'Amazon S3 getting started',
    resourceUrl: 'https://aws.amazon.com/s3/getting-started/',
    resourceNote: 'Official Amazon S3 getting-started page with free online courses and tutorials. The learning content is free; storing or transferring data in S3 may incur charges.',
    questions: [
      { question: 'Which Amazon S3 storage model is used for data such as images, backups, and documents?', options: ['Object storage', 'DNS hosting only', 'CPU scheduling', 'Message routing only'], answer: 0, explanation: 'Amazon S3 stores data as objects inside buckets.' },
      { question: 'Which storage type is commonly attached to an EC2 instance as a disk volume?', options: ['Amazon Route 53', 'Amazon EBS', 'Amazon SNS', 'AWS Organizations'], answer: 1, explanation: 'Amazon Elastic Block Store (EBS) provides block storage volumes for EC2 instances.' },
      { question: 'Which option is designed to provide a shared file system that multiple Linux EC2 instances can mount?', options: ['Amazon SQS', 'AWS KMS', 'Amazon EFS', 'Amazon CloudWatch'], answer: 2, explanation: 'Amazon Elastic File System (EFS) provides a scalable shared file system for supported compute clients.' },
    ],
  },
  Integration: {
    description: 'Learn how applications and distributed systems communicate through queues, notifications, and workflows.',
    resourceTitle: 'AWS application integration',
    resourceUrl: 'https://aws.amazon.com/free/application-integration/',
    resourceNote: 'Official AWS Application Integration free-offers page with tutorials and learning resources. Learning material is free; service usage is subject to Free Tier limits and may incur charges.',
    questions: [
      { question: 'Which service is a managed message queue that helps decouple application components?', options: ['Amazon SQS', 'Amazon EBS', 'AWS Direct Connect', 'Amazon Rekognition'], answer: 0, explanation: 'Amazon SQS queues messages so producers and consumers can operate independently.' },
      { question: 'Which service is commonly used to publish messages to subscribers using a pub/sub model?', options: ['Amazon EFS', 'Amazon SNS', 'AWS Shield', 'Amazon EC2'], answer: 1, explanation: 'Amazon SNS supports publish/subscribe messaging and message fan-out to subscribers.' },
      { question: 'What is a key benefit of decoupling services?', options: ['Every component must fail together', 'It removes the need for monitoring', 'Components can scale and fail more independently', 'It forces all data into one file'], answer: 2, explanation: 'Decoupling reduces tight dependencies and can improve resilience and independent scaling.' },
    ],
  },
  Compute: {
    description: 'Compare virtual servers, serverless functions, and scaling options for running workloads.',
    resourceTitle: 'Amazon EC2 getting started',
    resourceUrl: 'https://aws.amazon.com/ec2/getting-started/',
    resourceNote: 'Official Amazon EC2 getting-started page with tutorials and Free Tier information. Learning content is free; launching instances can incur charges if you exceed eligible credits or limits.',
    questions: [
      { question: 'What does Amazon EC2 provide?', options: ['Resizable virtual servers in the cloud', 'A managed email inbox only', 'A DNS domain registrar only', 'A business intelligence dashboard only'], answer: 0, explanation: 'Amazon EC2 provides on-demand compute capacity through virtual server instances.' },
      { question: 'Which service runs code in response to events without requiring you to manage servers?', options: ['Amazon EBS', 'AWS Lambda', 'Amazon VPC', 'AWS Artifact'], answer: 1, explanation: 'AWS Lambda runs code in response to events while AWS manages the underlying compute infrastructure.' },
      { question: 'What is the purpose of EC2 Auto Scaling?', options: ['Manually edit every log line', 'Encrypt every S3 bucket automatically', 'Adjust compute capacity to changing demand and configured policies', 'Register a domain name'], answer: 2, explanation: 'EC2 Auto Scaling can add or remove instances to maintain availability and match capacity to demand.' },
    ],
  },
  Networking: {
    description: 'Explore virtual networks, subnets, routing, and private connectivity in AWS.',
    resourceTitle: 'Amazon VPC user guide',
    resourceUrl: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
    resourceNote: 'Official Amazon VPC user guide. Documentation is free to read; VPC itself has no additional charge, but some components and connected AWS resources are billable.',
    questions: [
      { question: 'What does an Amazon VPC provide?', options: ['A logically isolated virtual network in AWS', 'A managed machine-learning notebook only', 'A physical laptop', 'A document-signing service'], answer: 0, explanation: 'An Amazon VPC lets you define an isolated virtual network for AWS resources.' },
      { question: 'What is the purpose of a subnet in a VPC?', options: ['Store IAM passwords', 'Partition the VPC IP address range into smaller network segments', 'Run SQL queries on S3', 'Build container images only'], answer: 1, explanation: 'Subnets divide a VPC address range and are associated with an Availability Zone.' },
      { question: 'What does a route table determine?', options: ['Which users can edit source code', 'How much an object weighs', 'Where network traffic is directed', 'Which quiz answer is correct'], answer: 2, explanation: 'Route tables contain rules that determine where network traffic is sent.' },
    ],
  },
  'Community Center': {
    description: 'Connect with AWS builders, find community learning, and discover events and peer support.',
    resourceTitle: 'AWS Builder Center',
    resourceUrl: 'https://builder.aws.com/',
    resourceNote: 'Official AWS Builder Center community and learning hub. Community resources are free to browse; some events or third-party offerings may have separate terms.',
    questions: [
      { question: 'What is a useful reason to participate in a technical community?', options: ['To learn from peers and share practical experience', 'To avoid reading documentation forever', 'To make all cloud resources public', 'To bypass security reviews'], answer: 0, explanation: 'Communities help learners exchange ideas, ask questions, and learn from others’ experience.' },
      { question: 'When asking a technical question in a community, what is most helpful?', options: ['Post secret credentials', 'Include relevant context and a minimal reproducible example without secrets', 'Share private customer data', 'Provide no details at all'], answer: 1, explanation: 'A clear, reproducible example helps others diagnose the issue while avoiding exposure of secrets.' },
      { question: 'Which source should you prefer for authoritative AWS service behavior?', options: ['An anonymous post with no references', 'An old copied snippet only', 'Official AWS documentation, checked against your service version', 'A random social-media comment'], answer: 2, explanation: 'Official AWS documentation is the primary reference for supported behavior and current service details.' },
    ],
  },
  Management: {
    description: 'Discover monitoring, governance, operational visibility, and cost management across AWS.',
    resourceTitle: 'AWS management and governance',
    resourceUrl: 'https://aws.amazon.com/training/learn-about/operations/',
    resourceNote: 'Official AWS Operations / Cloud Operator learning plan with courses and a ramp-up guide. Free digital learning is available; running AWS resources may incur charges.',
    questions: [
      { question: 'Which service collects metrics, logs, and alarms for AWS resources and applications?', options: ['Amazon CloudWatch', 'Amazon Polly', 'Amazon EFS', 'AWS IoT Greengrass'], answer: 0, explanation: 'Amazon CloudWatch provides monitoring and observability through metrics, logs, alarms, and related capabilities.' },
      { question: 'Which service records account activity and API events for auditing?', options: ['Amazon Athena', 'AWS CloudTrail', 'Amazon Route 53', 'Amazon ECR'], answer: 1, explanation: 'AWS CloudTrail records AWS account activity, including many actions made through the console, SDKs, and APIs.' },
      { question: 'What is a good cloud cost-management practice?', options: ['Leave every test resource running indefinitely', 'Ignore usage reports', 'Tag resources and review cost and usage regularly', 'Share root credentials'], answer: 2, explanation: 'Resource tags and regular cost reviews help attribute, understand, and control cloud spending.' },
    ],
  },
  IoT: {
    description: 'Learn how connected devices securely communicate with cloud applications and services.',
    resourceTitle: 'AWS IoT learning resources',
    resourceUrl: 'https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-learn-more.html',
    resourceNote: 'Official AWS IoT learning page with training courses, guides, and tutorials. Reading and learning resources are free; using AWS IoT services may incur charges.',
    questions: [
      { question: 'What is a common role of AWS IoT Core?', options: ['Connect devices to AWS and exchange messages securely', 'Provide block storage for EC2 only', 'Replace all application databases', 'Host only static PDFs'], answer: 0, explanation: 'AWS IoT Core enables connected devices to communicate with AWS services and applications.' },
      { question: 'Which protocol is commonly used for lightweight publish/subscribe messaging in IoT?', options: ['SMTP only', 'MQTT', 'FTP only', 'DHCP only'], answer: 1, explanation: 'MQTT is a lightweight publish/subscribe messaging protocol often used by IoT devices.' },
      { question: 'Why should an IoT device use unique credentials or certificates?', options: ['To make all device traffic public', 'To disable identity checks', 'To authenticate the device and help control its access', 'To increase battery size'], answer: 2, explanation: 'Unique identities help authenticate devices and apply appropriate authorization and revocation.' },
    ],
  },
  'Challenge Zone': {
    description: 'Test your cloud fundamentals and use AWS’s official free digital learning resources to build confidence.',
    resourceTitle: 'AWS Skill Builder — free learning resources',
    resourceUrl: 'https://aws.amazon.com/training/digital/',
    resourceNote: 'Official AWS Skill Builder offers hundreds of free digital courses and learning plans. Some advanced labs or experiences require a subscription, and deployed AWS resources may incur charges.',
    questions: [
      { question: 'Which AWS service model lets you use compute, storage, and networking resources on demand?', options: ['Cloud computing', 'Manual tape filing only', 'Offline-only desktop publishing', 'Physical mail routing'], answer: 0, explanation: 'Cloud computing provides on-demand access to configurable computing resources over a network.' },
      { question: 'What is an Availability Zone?', options: ['A billing invoice number', 'An isolated location within an AWS Region', 'An IAM password policy', 'A source-code branch'], answer: 1, explanation: 'An Availability Zone is an isolated location within an AWS Region, designed to support fault isolation.' },
      { question: 'Before experimenting with AWS services, what should you do?', options: ['Ignore permissions and costs', 'Expose access keys in source code', 'Understand pricing, set appropriate permissions, and clean up resources', 'Make all resources publicly accessible'], answer: 2, explanation: 'Cost awareness, secure permissions, and cleanup reduce unnecessary charges and security risk.' },
    ],
  },
};


/** Topic groupings for McqBankPage. Indices match each service's three questions above. */
export type McqTopicSection = {
  title: string;
  description: string;
  questionIndices: number[];
};

export const SERVICE_MCQ_SECTIONS: Record<string, McqTopicSection[]> = {
  'AI/ML': [
    { title: 'Machine Learning Fundamentals', description: 'Core machine-learning concepts and training workflows', questionIndices: [0, 2] },
    { title: 'Generative AI', description: 'Common applications of generative models', questionIndices: [1] },
  ],
  Analytics: [
    { title: 'Querying and Warehousing', description: 'Query data in S3 and operate data warehouses', questionIndices: [0, 1] },
    { title: 'Data Visualization', description: 'Understand patterns and trends in data', questionIndices: [2] },
  ],
  'Developer Tools': [
    { title: 'CI/CD and Version Control', description: 'Automated delivery and collaborative source control', questionIndices: [0, 1] },
    { title: 'AWS Build Tools', description: 'Build and test software with AWS developer services', questionIndices: [2] },
  ],
  Security: [
    { title: 'Identity and Access', description: 'Least privilege and AWS permissions', questionIndices: [0, 1] },
    { title: 'Shared Responsibility', description: 'Customer responsibilities for cloud security', questionIndices: [2] },
  ],
  Storage: [
    { title: 'Object and Block Storage', description: 'Choose storage for objects and instance disks', questionIndices: [0, 1] },
    { title: 'Shared File Storage', description: 'Shared file systems for compute instances', questionIndices: [2] },
  ],
  Integration: [
    { title: 'Messaging Services', description: 'Queues and publish/subscribe messaging', questionIndices: [0, 1] },
    { title: 'Decoupled Architecture', description: 'Benefits of independent application components', questionIndices: [2] },
  ],
  Compute: [
    { title: 'Cloud Compute', description: 'Virtual servers and serverless execution', questionIndices: [0, 1] },
    { title: 'Scaling', description: 'Adjust capacity as demand changes', questionIndices: [2] },
  ],
  Networking: [
    { title: 'VPC and Subnets', description: 'Virtual networks and IP address segmentation', questionIndices: [0, 1] },
    { title: 'Routing', description: 'Direct traffic using route tables', questionIndices: [2] },
  ],
  'Community Center': [
    { title: 'Community Learning', description: 'Learn from peers and share practical experience', questionIndices: [0, 1] },
    { title: 'Trusted Technical Sources', description: 'Prefer authoritative service documentation', questionIndices: [2] },
  ],
  Management: [
    { title: 'Monitoring and Auditing', description: 'Observe resources and record account activity', questionIndices: [0, 1] },
    { title: 'Cost Management', description: 'Track usage and manage cloud spending', questionIndices: [2] },
  ],
  IoT: [
    { title: 'Connected Devices', description: 'Connect devices securely to cloud applications', questionIndices: [0, 2] },
    { title: 'IoT Messaging', description: 'Use lightweight publish/subscribe protocols', questionIndices: [1] },
  ],
  'Challenge Zone': [
    { title: 'Cloud Fundamentals', description: 'Cloud computing and AWS Regions and Availability Zones', questionIndices: [0, 1] },
    { title: 'Safe AWS Experiments', description: 'Control permissions, costs, and resource cleanup', questionIndices: [2] },
  ],
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'AI/ML': BrainCircuit, Analytics: BarChart3, 'Developer Tools': Code2,
  Security: ShieldCheck, Storage: Database, Integration: Link2, Compute: Cpu,
  Networking: Network, 'Community Center': Building2, Management: Settings,
  IoT: RadioTower, 'Challenge Zone': Zap,
};

type Props = { service: string; onBack: () => void };

export const ServiceLearningPage: React.FC<Props> = ({ service, onBack }) => {
  const info = SERVICE_LEARNING[service] || SERVICE_LEARNING['Challenge Zone'];
  const Icon = SERVICE_ICONS[service] || GraduationCap;
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const correctCount = info.questions.reduce((total, q, index) => total + (checked[index] && answers[index] === q.answer ? 1 : 0), 0);
  const allAnswered = info.questions.every((_, index) => checked[index]);

  const resetQuiz = () => {
    setAnswers({});
    setChecked({});
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#080c13] px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-400/40 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to AWS City
        </button>
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#132338] via-[#101721] to-[#11151c] p-6 sm:p-9">
          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                <GraduationCap className="h-3.5 w-3.5" /> AWS SERVICE LEARNING
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{service}</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">{info.description}</p>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center self-start rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 sm:self-center">
              <Icon className="h-10 w-10" />
            </div>
          </div>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_400px] xl:gap-8">
          <section className="space-y-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-cyan-300">KNOWLEDGE CHECK</div>
                <h2 className="mt-1 text-xl font-bold text-white">Topic MCQ quiz</h2>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-mono text-zinc-300">
                {Object.keys(checked).length}/{info.questions.length} reviewed
                {allAnswered && <span className="ml-2 font-bold text-emerald-300">· Score {correctCount}/{info.questions.length}</span>}
              </div>
            </div>
            {info.questions.map((q, index) => {
              const isChecked = !!checked[index];
              const isCorrect = answers[index] === q.answer;
              return (
                <article key={`${service}-${index}`} className="rounded-2xl border border-white/10 bg-[#111720] p-5 sm:p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-200">0{index + 1}</span>
                    <h3 className="pt-1 text-sm font-semibold leading-6 text-white sm:text-base">{q.question}</h3>
                  </div>
                  <div className="space-y-2 pl-0 sm:pl-11">
                    {q.options.map((option, optionIndex) => {
                      const selected = answers[index] === optionIndex;
                      const rightAnswer = q.answer === optionIndex;
                      const stateClass = isChecked && rightAnswer
                        ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-100'
                        : isChecked && selected && !rightAnswer
                          ? 'border-rose-400/60 bg-rose-400/10 text-rose-100'
                          : selected
                            ? 'border-cyan-300/50 bg-cyan-300/10 text-white'
                            : 'border-white/10 bg-white/[0.025] text-zinc-300 hover:border-white/20 hover:bg-white/[0.05]';
                      return (
                        <button
                          key={option}
                          disabled={isChecked}
                          onClick={() => setAnswers(previous => ({ ...previous, [index]: optionIndex }))}
                          className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition ${stateClass} disabled:cursor-default`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-current/20 text-[10px] font-bold">{String.fromCharCode(65 + optionIndex)}</span>
                          <span className="flex-1">{option}</span>
                          {isChecked && rightAnswer && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />}
                          {isChecked && selected && !rightAnswer && <XCircle className="h-4 w-4 shrink-0 text-rose-300" />}
                        </button>
                      );
                    })}
                    {isChecked && (
                      <div className={`mt-3 rounded-xl border p-3 text-sm leading-6 ${isCorrect ? 'border-emerald-400/20 bg-emerald-400/5 text-emerald-100' : 'border-amber-400/20 bg-amber-400/5 text-zinc-200'}`}>
                        <div className="mb-1 flex items-center gap-2 font-semibold">
                          {isCorrect ? <CheckCircle2 className="h-4 w-4 text-emerald-300" /> : <XCircle className="h-4 w-4 text-amber-300" />}
                          {isCorrect ? 'Correct' : `Correct answer: ${String.fromCharCode(65 + q.answer)}`}
                        </div>
                        {q.explanation}
                      </div>
                    )}
                    {!isChecked && (
                      <div className="pt-1">
                        <button
                          disabled={answers[index] === undefined}
                          onClick={() => setChecked(previous => ({ ...previous, [index]: true }))}
                          className="rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-zinc-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Check answer
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
            {allAnswered && (
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 sm:flex-row sm:items-center">
                <div>
                  <div className="text-lg font-bold text-white">Quiz complete: {correctCount}/{info.questions.length}</div>
                  <p className="mt-1 text-sm text-zinc-400">Review the explanations, then try again or continue learning.</p>
                </div>
                <button onClick={resetQuiz} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5">
                  <RotateCcw className="h-4 w-4" /> Try again
                </button>
              </div>
            )}
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-amber-400/20 bg-[#111720] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-amber-300">OFFICIAL AWS RESOURCE</div>
              <h2 className="mt-2 text-lg font-bold text-white">{info.resourceTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{info.resourceNote}</p>
              <a href={info.resourceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-300">
                Open AWS learning resource <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-3 break-all text-[10px] text-zinc-600">{info.resourceUrl}</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
              <h3 className="text-sm font-bold text-white">Suggested path</h3>
              <ol className="mt-3 space-y-3 text-sm text-zinc-400">
                <li className="flex gap-3"><span className="font-mono text-cyan-300">01</span><span>Answer the topic questions.</span></li>
                <li className="flex gap-3"><span className="font-mono text-cyan-300">02</span><span>Read the official AWS learning material.</span></li>
                <li className="flex gap-3"><span className="font-mono text-cyan-300">03</span><span>Return and retry the quiz to reinforce what you learned.</span></li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};





















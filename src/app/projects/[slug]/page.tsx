import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, getProjectSchemaKind, projects, SITE_URL } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Nawab Sahil",
      description: "The requested project could not be found.",
    };
  }

  const canonical = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: `${project.title} | Engineering Project by Nawab Sahil`,
    description: project.fullDesc,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${project.title} | Nawab Sahil`,
      description: project.shortDesc,
      siteName: "Nawab Sahil | Engineering Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Nawab Sahil`,
      description: project.shortDesc,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${SITE_URL}/projects/${project.slug}`;
  const schemaType = getProjectSchemaKind(project);
  const mainEntity = {
    "@type": schemaType,
    "@id": `${projectUrl}#project`,
    name: project.title,
    headline: project.title,
    description: project.fullDesc,
    inLanguage: "en",
    datePublished: `${project.year}-01-01`,
    dateModified: `${project.year}-12-31`,
    author: {
      "@type": "Person",
      name: "Nawab Sahil",
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: "Nawab Sahil",
      url: SITE_URL,
    },
    url: projectUrl,
    image: SITE_URL,
    keywords: project.tags.join(", "),
    genre: project.category,
    potentialAction: {
      "@type": "ViewAction",
      target: project.live || project.github || projectUrl,
      name: "View project details",
    },
    ...(schemaType === "SoftwareApplication"
      ? {
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
        }
      : {
          about: project.category,
        }),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${projectUrl}#webpage`,
        url: projectUrl,
        name: `${project.title} | Project Case Study`,
        description: project.shortDesc,
        inLanguage: "en",
        breadcrumb: {
          "@id": `${projectUrl}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${projectUrl}#project`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      mainEntity,
    ],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <nav aria-label="Breadcrumb" className="mb-4 text-xs">
        <ol className="dp-breadcrumb">
          <li>
            <Link href="/" className="dp-breadcrumb-link">Home</Link>
          </li>
          <li aria-hidden="true" className="dp-breadcrumb-separator">/</li>
          <li>
            <Link href="/projects" className="dp-breadcrumb-link">Projects</Link>
          </li>
          <li aria-hidden="true" className="dp-breadcrumb-separator">/</li>
          <li className="dp-breadcrumb-current" aria-current="page">{project.title}</li>
        </ol>
      </nav>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-full border border-dp-border-secondary bg-dp-bg-3 px-4 py-2 text-sm text-dp-text-secondary transition hover:border-dp-lime hover:text-dp-lime"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <article className="mt-6 rounded-[24px] border border-dp-border-secondary bg-dp-bg-2 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-dp-orange">
            {project.category.toUpperCase()}
          </span>
          <span className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-dp-teal">
            {project.status.toUpperCase()}
          </span>
          <span className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-dp-lime">
            {project.year}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold text-dp-text-primary sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-sm leading-7 text-dp-text-secondary sm:text-base">{project.fullDesc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dp-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 p-4">
            <h2 className="font-mono text-[11px] tracking-[0.3em] text-dp-text-secondary">PROBLEM</h2>
            <p className="mt-2 text-sm leading-7 text-dp-text-secondary">{project.shortDesc}</p>
          </section>
          <section className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 p-4">
            <h2 className="font-mono text-[11px] tracking-[0.3em] text-dp-text-secondary">DELIVERY</h2>
            <p className="mt-2 text-sm leading-7 text-dp-text-secondary">
              Delivered with an engineering-first approach covering architecture clarity, deployment readiness, and maintainable iteration paths.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-dp-border-secondary bg-dp-bg-3 px-4 py-2 text-sm text-dp-text-secondary transition hover:border-dp-lime hover:text-dp-lime"
            >
              <Github size={14} /> GitHub
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-dp-border-secondary bg-dp-bg-3 px-4 py-2 text-sm text-dp-text-secondary transition hover:border-dp-orange hover:text-dp-orange"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : null}
        </div>
      </article>
    </div>
  );
}

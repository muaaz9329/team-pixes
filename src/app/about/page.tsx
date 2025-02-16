import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TeamPixes | Our Story and Vision",
  description:
    "Learn about TeamPixes - A digital studio combining development excellence with innovative design",
};

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-bold mb-6">About TeamPixes</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            TeamPixes is a digital studio where development meets design...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            We believe in creating digital experiences that stand out...
          </p>
        </section>
      </article>
    </main>
  );
}

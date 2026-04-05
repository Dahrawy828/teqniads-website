import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const FEATURED_PRODUCTS = [
  {
    name: "Furniche",
    description:
      "An AI-powered platform for furniture businesses to manage catalogs, sales, and operations in one place.",
    status: "coming-soon" as const,
  },
  {
    name: "LeadFlow AI",
    description:
      "AI-driven lead generation and qualification platform that finds, scores, and enriches high-quality prospects automatically.",
    status: "coming-soon" as const,
  },
  {
    name: "PeopleOps AI",
    description:
      "A smart HR platform that automates hiring, onboarding, and employee management using AI insights.",
    status: "coming-soon" as const,
  },
];

export default function FeaturedSaaS() {
  return (
    <Section className="border-t border-(--color-slate)/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-white">Featured Products</h2>
          <p className="text-(--color-muted) mt-4 max-w-xl mx-auto">
            Explore our growing ecosystem of SaaS tools built to solve real
            business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.name} className="p-8">
              <Badge status={product.status} />
              <h3 className="text-white mt-4 mb-2">{product.name}</h3>
              <p className="text-(--color-muted) text-sm">
                {product.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

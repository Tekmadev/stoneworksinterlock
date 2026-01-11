type JsonLdProps = {
  data: unknown;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}



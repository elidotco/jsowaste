export { default as Header } from "./Header";
export { default as Footer } from "./Footer";

// Custom components for PortableText
export const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-12 pl-6 border-l-4 border-green-500">
        <p className="text-xl italic text-gray-800">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700">
        {children}
      </ol>
    ),
  },
};

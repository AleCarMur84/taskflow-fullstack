import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
      {title && (
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      )}

      <div>{children}</div>
    </div>
  );
}

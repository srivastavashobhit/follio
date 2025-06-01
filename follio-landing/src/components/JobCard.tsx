import Link from "next/link";

interface JobCardProps {
  title: string;
  location: string;
  description: string;
  applyUrl: string;
}

export default function JobCard({ title, location, description, applyUrl }: JobCardProps) {
  return (
    <Link
      href={applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-follio-blue group"
    >
      <h2 className="text-2xl font-semibold group-hover:text-follio-blue">{title}</h2>
      <p className="text-gray-700 mb-4">{location}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      <span className="inline-block text-sm font-medium text-white bg-follio-blue hover:bg-follio-teal transition px-4 py-2 rounded-md">
        Apply
      </span>
    </Link>
  );
}

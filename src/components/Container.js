export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[640px] px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

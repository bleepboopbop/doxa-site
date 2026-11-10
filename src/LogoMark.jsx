export const LogoMark = ({ className = "h-8 w-8", ...props }) => (
    <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Doxa Marketing logo"
        {...props}
    >
        <rect width="64" height="64" rx="14" fill="#8B1E3F" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 15h10.5C44.6 15 51 22.4 51 32s-6.4 17-19.5 17H21V15Zm11 9.4v15.2h1.2c5 0 7.9-3 7.9-7.6s-2.9-7.6-7.9-7.6H32Z"
            fill="#FAFAFC"
        />
        <circle cx="50" cy="49" r="4.5" fill="#FAFAFC" />
    </svg>
);

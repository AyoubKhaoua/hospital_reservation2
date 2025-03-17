const TilteHeader = ({
    title,
    description,
    className,
    icon
}) => {
  return (
    <div className={`space-y-2 w-full text-black font-bricolage dark:text-neutral-200 ${className}`}>
        <h1 className="flex items-start text-2xl font-medium font-dm">
        <span>{icon}</span>
        <span>{title}</span>
        </h1>
        <p className="font-dm text-sm text-gray-600 max-w-sm leading-5">{description}</p>
    </div>
  )
}

export default TilteHeader;
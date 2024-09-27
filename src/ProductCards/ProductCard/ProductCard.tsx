type Props =
  | {
      title: null
    }
  | {
      imageUrl: string
      title: string
      description: string
      price: number
    }

export function ProductCard(props: Props) {
  const { title } = props

  console.log('elo', title)

  if (title === null) {
    return (
      <div className="flex flex-row gap-6 p-5 bg-white border-2 border-blue-500 rounded-lg">
        <h2 className="text-2xl font-semibold">{'No products found'}</h2>
      </div>
    )
  }
  const { imageUrl, description, price } = props
  return (
    <div className="flex flex-row gap-6 p-5 bg-white border-2 border-blue-500 rounded-lg">
      <img
        src={imageUrl}
        width={50}
        height={50}
        alt="Product Image"
        className="w-32 h-32 rounded-md shadow"
      />
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600 line-clamp-2">{description}</p>
        <p className="text-lg font-bold text-blue-600">{`$${price}`}</p>
      </div>
    </div>
  )
}

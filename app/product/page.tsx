interface Props {
  searchParams: String;
}

export default function ProductPage(props: Props) {
  const { searchParams } = props;
  const { price_id } = searchParams;
  console.log(price_id);
  return <div>Hello</div>;
}

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export const ProductCard = ({ product }) => (
  <Card shadow="sm" key={product.id} isPressable onPress={() => console.log("item pressed")}>
  <CardBody className="overflow-visible p-0">
    <Image
      shadow="sm"
      radius="lg"
      width="100%"
      alt={product.title}
      className="w-full object-contain h-[150px]"
      src={product.photo}
    />
  </CardBody>
  <CardFooter className="text-small justify-between">
    <b>{product.title}</b>
    <p className="text-default-500">${product.price}</p>
  </CardFooter>
</Card>
);
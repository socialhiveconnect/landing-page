import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from 'next/image';

interface cardProps {
  image: StaticImageData;
  title: string;
}

export default function CustomCard({ image, title }: cardProps) {
  return (
    <Card className='w-[300px]'>
      <CardHeader />
      <CardContent>
        <Image src={image} alt='teste' />
      </CardContent>
      <CardFooter>
        {title}
      </CardFooter>
    </Card>
  )
}
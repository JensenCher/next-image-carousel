import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Carousel from "./carousel";
import Image from "next/image";

let images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
];

const CarouselDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-fit h-fit relative overflow-hidden bg-[#f0e07f] hover:bg-[#f2dc57]"
          >
            <Image
              src={images[0]}
              alt="1jpeg"
              width={400}
              height={240}
              className="rounded-md py-2"
            />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-screen h-screen bg-transparent border-transparent">
          <Carousel images={images} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CarouselDialog;

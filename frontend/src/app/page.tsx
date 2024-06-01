import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <main className="flex-col items-center justify-between ">
      อันนี้คือหน้าแรกกก เอาไว้ทำหน้า HOME คลิกไปหน้าอื่นๆกับทดลอง
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button variant="outline">Button</Button>

    </main>
  );
}

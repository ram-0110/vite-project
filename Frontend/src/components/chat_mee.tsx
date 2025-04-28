import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function MessageComp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  w-full">
      <h1 className="text-4xl font-bold">Enter Your Preference</h1>
      <br /> <br /> <br />
      <footer className="grid max-w-screen gap-2 w-full p-8 m-9">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </footer>
    </div>
  );
}

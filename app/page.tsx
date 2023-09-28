"use client";

// import { Button } from "@/components/ui/ui/button";
import { ModeToggle } from "@/components/ui/ui/toggle-mode";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { log } from "console";
// import { Switch } from "@/components/ui/switch";

export default function Home() {
  // const todoList: string[] = [];
  const [textArea, settextArea] = useState("");
  const [todoList, settodoList] = useState([""]);
  return (
    <main className="flex gap-10 min-h-screen flex-col items-center justify-center p-24">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl font-semibold ">SHAD CN TESTING</h1>
        <ModeToggle />
      </div>
      <Separator />
      <h1>TODO APP</h1>

      <Card className={"w-[680px]"}>
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
          <CardDescription>Add Yout Todos below</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Textarea
            value={textArea}
            onChange={(e) => {
              settextArea(e.target.value);
            }}
            placeholder="Type your message here."
          />
          <Button
            onClick={() => {
              settodoList([textArea, ...todoList]);
              console.log(todoList);
            }}
          >
            Add Todo
          </Button>
        </CardContent>
        <CardFooter>
          <Separator />
        </CardFooter>
      </Card>
      {/* insert todo here */}
      {todoList.map((item, index) => (
        <Card className="w-[600px] p-10 flex justify-between">
          <h1>{item}</h1>
          <div className="flex gap-8">
            <Button>Update </Button>
            <Button>Delete </Button>
          </div>
        </Card>
      ))}
    </main>
  );
}

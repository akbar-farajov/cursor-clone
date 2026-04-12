"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  return (
    <main className="flex flex-col min-h-screen gap-4 items-center justify-center p-24">
      {projects?.map(({ _id, name, ownerId }) => (
        <Card key={_id} className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{ownerId}</CardDescription>
          </CardHeader>
        </Card>
      ))}
      <Button
        onClick={() => {
          createProject({ name: "New Project" });
        }}
      >
        Create Project
      </Button>
    </main>
  );
}

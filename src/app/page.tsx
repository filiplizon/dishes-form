"use client";
import DishForm from "@/components/Form/Form";
import { mainStyle } from "@/utils/styles";

export default function Home() {
  return (
    <main className={mainStyle}>
      <DishForm />
    </main>
  );
}

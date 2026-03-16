"use client"

import BottomBar from "@/components/bottom-bar";
import Map from "@/components/map";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Map />
      <BottomBar />
    </div>
  );
}
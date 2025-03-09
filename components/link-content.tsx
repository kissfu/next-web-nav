"use client"

import Image from "next/image"
import Link from "next/link"

import { NavData } from "@/config/site"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export function LinkContent() {
  return (
    <div className="w-full pb-96 pt-4">
      <div id="main" className="mx-auto w-full px-4 md:px-6">
        {NavData.map((category, index) => {
          return (
            <div id={String(index)} key={index} className="mb-12">
              <div className="my-4">
                <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">{category.title}</h1>
              </div>
              <HoverEffect
                items={category.items.map(({ title, desc, link, icon }) => ({
                  link,
                  title,
                  description: desc,
                  icon
                }))}
              />
            </div>
          )
        })}
        <div className="mb-12">
          <div className="my-4">
            <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">联系我</h1>
          </div>
          <div>
            你可以通过
            <Link href="mailto:able2012@163.com" target="_blank" rel="noreferrer">
              <span className="px-3 underline decoration-wavy hover:text-purple-500">Email</span>
            </Link>
            联系我
          </div>
          <div>
            <Image src="/weixin.jpg" className="float-left md:w-1/4" alt="聊吧" width={318} height={318} />
          </div>
        </div>
      </div>
    </div>
  )
}

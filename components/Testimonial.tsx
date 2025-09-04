"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialProps = {
  name: string;
  role: string;
  businessName: string;
  businessLogo: string;
  businessWebsite: string;
  review: string;
  photo: string;
};

const testimonials: TestimonialProps[] = [
  {
    name: "K.K Ubani",
    role: "Principal Partner",
    businessName: "K.K Ubani & Co. Law Firm",
    businessLogo: "/logos/ubani-law.png", // replace with actual
    businessWebsite: "https://kkubaniandco.com",
    review:
      "I trusted their services and it is so good. The Business Growth Website and Email package gave us a professional online presence that matches the reputation of our firm. Our clients now find it easier to connect with us.",
    photo: "/clients/ubani.png", // replace with actual
  },
  {
    name: "Bob Pepple",
    role: "CEO",
    businessName: "Eljards Limited Services",
    businessLogo: "/logos/eljards.png", // replace with actual
    businessWebsite: "https://eljardsltdservices.com.ng",        
    review:
      "This starter package was exactly what we needed — affordable, simple, and effective. The website and email setup have streamlined our operations and given us credibility.",
    photo: "/clients/eljards.png", // replace with actual
  },
];

function TestimonialCard({
  name,
  role,
  businessName,
  businessLogo,
  businessWebsite,
  review,
  photo,
}: TestimonialProps) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-md max-w-md mx-auto">
      {/* Person photo */}
      <div className="flex justify-center mb-4">
        <Image
          src={photo}
          alt={name}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>

      {/* Review */}
      <p className="text-gray-700 italic mb-4 text-center">“{review}”</p>

      {/* Person info */}
      <div className="text-center">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>

      {/* Business info */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <Image
          src={businessLogo}
          alt={businessName}
          width={40}
          height={40}
          className="rounded-md"
        />
        <Link
          href={businessWebsite}
          target="_blank"
          className="text-blue-600 hover:underline font-medium"
        >
          {businessName}
        </Link>
      </div>
    </div>
  );
}



export default function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay:14000, stopOnInteraction: true }) // 4s delay
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
      
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <TestimonialCard {...t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

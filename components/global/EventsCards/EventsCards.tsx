"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card"; // Magic UI’s card

interface EventCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

export function EventCard({
  id,
  image,
  title,
  description,
  location,
  date,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer"
      >
        <MagicCard className="group overflow-hidden rounded-2xl">
          <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardHeader className="p-0 relative">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <Badge className="absolute top-3 right-3 bg-purple-600 text-white shadow-lg">
                  Event
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-5 space-y-3">
              <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                {title}
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {date}
                </span>
              </div>
            </CardContent>
          </Card>
        </MagicCard>
      </motion.div>
    </Link>
  );
}

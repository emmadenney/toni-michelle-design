"use client";

import { useState } from "react";
import Image from "next/image";

interface Illustration {
  title: string;
  slug: string;
  description: string;
  thumbnail: { url: string };
  featuredImage: { url: string };
  secondaryImage: { url: string };
  sys: { id: string };
}

interface IllustrationsProps {
  illustrations: Illustration[];
}

const IllustrationsList = ({ illustrations }: IllustrationsProps) => {};

export default IllustrationsList;

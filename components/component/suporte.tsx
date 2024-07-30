"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function Suporte() {
  const links = [
    {
      id: 1,
      title: "Bematech MP 4200 TH",
      description: "Drive para instalação do Spooler das impressoras Bematech modelos 2500 - 4000 - 4200TH - 100s - 5100 64bits.",
      thumbnail: "./bematech.svg",
      category: "Driver",
      url: "/drive_impressora/BEMATECH/64 BITS - 2500-4000-4200-100s-5100 Drivers.exe",
      popularity: 5.0,
    },
    {
      id: 2,
      title: "Epson TM 20X",
      description: "Driver exclusivo para instalação da impressora TM-20X USB/SERIAL para Windows.",
      thumbnail: "/epson.jpg",
      category: "Driver",
      url: "/drive_impressora/EPSON/TM-T20X/TM-T20X.exe",
      popularity: 4.9,
    },
    {
      id: 3,
      title: "Epson TM 20",
      description: "Driver exclusivo para instalação da impressora TM 20 USB/SERIAL para Windows",
      thumbnail: "/epson20.jpg",
      category: "Driver",
      url: "/drive_impressora/EPSON/TM-T20/TM - T20.exe",
      popularity: 4.9,
    },
    {
      id: 4,
      title: "Elgin i7 & i9",
      description: "Drive para instalação do Spooler das impressoras Elgin modelos i7 e i9.",
      thumbnail: "/elgin.png",
      category: "Driver",
      url: "./src/DRIVE IMPRESSORA/ELGIN/i7-i9 Drivers .exe",
      popularity: 4.9,
    },
    {
      id: 5,
      title: "Dribbble",
      description: "Showcase and discover the latest design work from designers worldwide.",
      thumbnail: "/placeholder.svg",
      category: "Design",
      url: "https://dribbble.com",
      popularity: 4.6,
    },
    {
      id: 6,
      title: "Notion",
      description: "The all-in-one workspace for your notes, tasks, wikis, and databases.",
      thumbnail: "/placeholder.svg",
      category: "Productivity",
      url: "https://notion.so",
      popularity: 4.7,
    },
    {
      id: 7,
      title: "Behance",
      description:
        "Showcase and discover the latest work from top online portfolios by creative professionals across industries.",
      thumbnail: "/placeholder.svg",
      category: "Design",
      url: "https://behance.net",
      popularity: 4.8,
    },
    {
      id: 8,
      title: "GitHub",
      description:
        "Where the world builds software. Millions of developers and companies build, ship, and maintain their software on GitHub.",
      thumbnail: "/placeholder.svg",
      category: "Technology",
      url: "https://github.com",
      popularity: 4.9,
    },
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popularity")
  const [selectedCategories, setSelectedCategories] = useState([])
  
  const filteredLinks = useMemo(() => {
    return links
      .filter((link) => {
        if (searchTerm.trim() !== "") {
          return (
            link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            link.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }
        return true
      })
      .filter((link) => {
        if (selectedCategories.length > 0) {
          return selectedCategories.includes(link.category)
        }
        return true
      })
      .sort((a, b) => {
        if (sortBy === "popularity") {
          return b.popularity - a.popularity
        } else {
          return 0
        }
      })
  }, [searchTerm, sortBy, selectedCategories])

  const handleDownload = (url) => {
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', '')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Utilitários para suporte</h1>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xs"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ListOrderedIcon className="w-4 h-4 mr-2" />
                Ordenar por:{" "}
                {sortBy === "popularity" ? "Popularidade" : "Relevância"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="popularity">
                  Popularidade
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="relevance">
                  Relevância
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredLinks.map((link) => (
          <Card key={link.id}>
            <img
              src={link.thumbnail}
              alt={link.title}
              width={400}
              height={225}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <CardContent className="p-4">
              <h3 className="text-lg text-blue-900 font-semibold mb-2">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {link.description}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="primary" className="hover:bg-blue-500">
                  {link.category}
                </Badge>
                <Button
                  className="bg-blue-400 text-white"
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDownload(link.url)}
                >
                  <DownloadIcon className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Filtrar por categoria</h2>
        <div className="flex flex-wrap gap-2">
          {["Driver", "Utility", "Rede", "USB/SERIAL/COM"].map((category) => (
            <Button
              key={category}
              variant={
                selectedCategories.includes(category) ? "primary" : "outline"
              }
              onClick={() => handleCategoryChange(category)}
              className="px-4 py-2 text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

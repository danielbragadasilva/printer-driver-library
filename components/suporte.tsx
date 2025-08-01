"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon, ExclamationTriangleIcon, PlayIcon } from "@radix-ui/react-icons"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
      obs: "Impressora teste",
      urlvideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Epson TM 20X",
      description: "Driver exclusivo para instalação da impressora TM-20X USB/SERIAL para Windows.",
      thumbnail: "/epson.jpg",
      category: "Driver",
      url: "/drive_impressora/EPSON/TM-T20X/TM-T20X.exe",
      popularity: 4.9,
      urlvideo: "https://www.youtube.com/embed/ScMzIvxBSi4"
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
      url: "/drive_impressora/ELGIN/i7 i9/ELGIN i7 i9.exe",
      popularity: 4.9,
      urlvideo: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
      id: 5,
      title: "Elgin i8",
      description: "Driver exclusivo para instalação da impressora i8, POS58 e POS80.",
      thumbnail: "/elgini8.png",
      category: "Driver",
      url: "/drive_impressora/ELGIN/i8/i8_Windows Driver_V7.17.exe",
      popularity: 4.9,
    },
    {
      id: 6,
      title: "Utility Bematech",
      description: "Configurador de rede para impressoras modelos Bematech modelos 2500 - 4000 - 4200TH - 100s - 5100 64bits ",
      thumbnail: "/bematechrede.png",
      category: "Utility",
      url: "/drive_impressora/BEMATECH/ENCONTRAR IP/Bematech User Software v2.8.3 for 64 bits.exe",
      popularity: 4.7,
    },
    {
      id: 7,
      title: "Utility Elgin i9 e i7",
      description:
        "Configurador de rede para impressoras da marca Elgin modelo i9 e i7",
      thumbnail: "/elginrede.png",
      category: "Utility",
      url: "/drive_impressora/ELGIN/i7 i9/ELGINUtilitySetup_V1.2.2.24/ELGINUtilitySetup V1.2.2.24.exe",
      popularity: 4.8,
    },
    {
      id: 8,
      title: "Utility Epson",
      description:
        "Configurador de rede para impressoras da marca EPSON TM 20, TM 20x e TM 88",
      thumbnail: "/epsonrede.png",
      category: "Utility",
      url: "/drive_impressora/EPSON/MAGAIVER EPSON CONFIGURADOR DHCP.exe",
      popularity: 4.9,
    },
    {
      id: 9,
      title: "Control ID",
      description:
        "Drive & utility para instalação e configuração de rede para impressora Control ID",
      thumbnail: "/controlid.png",
      category: "Driver & Utility",
      url: "/drive_impressora/PRINTER ID/PRINTER ID.zip",
      popularity: 4.5,
    },
    {
      id: 10,
      title: "Tanca TP 450",
      description:
        "Drive de configuração para impressora TP-450",
      thumbnail: "/logotanca.png",
      category: "Drive",
      url: "/drive_impressora/TANCA/TP-450.exe",
      popularity: 4.0,
    },
    {
      id: 11,
      title: "Tanca TP 550",
      description:
        "Drive de configuração para impressora TP-550",
      thumbnail: "/logotanca550.png",
      category: "Drive",
      url: "/drive_impressora/TANCA/TP-550.exe",
      popularity: 4.0,
    },
    {
      id: 12,
      title: "Tanca TP 650",
      description:
        "Drive de configuração para impressora TP-650",
      thumbnail: "/logotanca650.png",
      category: "Drive",
      url: "/drive_impressora/TANCA/TP-650.exe",
      popularity: 4.0,
    },
    {
      id: 13,
      title: "Utility Tanca",
      description:
        "Utility de configuração de rede para impressora TP-650, TP-550, TP-450",
      thumbnail: "/logotanca650.png",
      category: "Drive",
      url: "/drive_impressora/TANCA/Driver_Utilitarios_TP-650.zip",
      popularity: 3.0,
    },
    {
      id: 14,
      title: "Daruma DR800",
      description:
        "Driver de configuração da impressora daruma modelo DR800",
      thumbnail: "/daruma.png",
      category: "Drive",
      url: "/drive_impressora/DARUMA/DARUMA DR_800/Driver_DR800.zip",
      popularity: 3.0,
    },
    {
      id: 15,
      title: "Daruma DR700",
      description:
        "Driver de configuração da impressora daruma modelo DR700",
      thumbnail: "/daruma.png",
      category: "Drive",
      url: "/drive_impressora/DARUMA/Daruma DR700/Driver_Daruma_S700.zip",
      popularity: 3.0,
    },
    {
      id: 16,
      title: "Prolific",
      description:
        "Driver de correção para dispositivos com porta Prolifica ",
      thumbnail: "/placeholder.svg",
      category: "Drive",
      url: "/drive_impressora/Prolific.exe",
      popularity: 3.0,
    },
    {
      id: 17,
      title: "Hercules",
      description:
        "Utilitário para identificação de parâmetros de balança com porta serial e outro dispositivos ",
      thumbnail: "/placeholder.svg",
      category: "Utility",
      url: "/drive_impressora/Prolific.exe",
      popularity: 3.0,
    },
    {
      id: 18,
      title: "Sweda Si300",
      description:
        "Drive para configuração da impressora Sweda Si300",
      thumbnail: "/placeholder.svg",
      category: "Driver",
      url: "/drive_impressora/SWEDA Si300/509_si_3aal.exe",
      popularity: 3.0,
    },
    {
      id: 19,
      title: "Gertec G250",
      description:
        "Drive para configuração da impressora Gerte G250 USB",
      thumbnail: "/placeholder.svg",
      category: "Driver",
      url: "/drive_impressora/GERTEC/G250-G250W-main.zip",
      popularity: 3.0,
    },
    {
      id: 20,
      title: "Gertec Utility",
      description:
        "Utility para configuração da impressora Gerte G250 em rede",
      thumbnail: "/placeholder.svg",
      category: "Utility",
      url: "/drive_impressora/GERTEC/Utility_G250_G250W.zip",
      popularity: 3.0,
    },
    {
      id: 21,
      title: "Diebold",
      description:
        "Driver para configuração da impressora Diebold modelo IM433T USB ou COM",
      thumbnail: "/placeholder.svg",
      category: "Driver",
      url: "/drive_impressora/DIEBOLD IM433T/IM433T DRIVERS DIEBOLD.exe",
      popularity: 3.0,
    },
    {
      id: 22,
      title: "Sem Marca - POS58",
      description:
        "Driver para configuração da generica ou POS USB ou COM",
      thumbnail: "/placeholder.svg",
      category: "Driver",
      url: "/drive_impressora/POS/DRIVER POS.zip",
      popularity: 4.5,
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
      .sort((a, b, c) => {
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
    <div className="min-h-screen bg-blue-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">Utilitários para Suporte de Sistema</h1>
          <p className="text-blue-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Baixe drivers e utilitários para impressoras e equipamentos de forma rápida e segura
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-900">🔍 Buscar e Filtrar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar por nome ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <ListOrderedIcon className="w-4 h-4 mr-2" />
                    Ordenar por: {sortBy === "popularity" ? "Popularidade" : "Relevância"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-lg">
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
            
            {/* Category Filters */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-blue-900">🏷️ Filtrar por categoria:</h3>
              <div className="flex flex-wrap gap-2">
                {["Driver", "Utility", "Driver & Utility"].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className={selectedCategories.includes(category) 
                      ? "bg-button-gradient hover:bg-button-gradient-hover text-white shadow-md rounded-full" 
                      : "border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 rounded-full transition-all duration-300"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredLinks.map((link) => (
          <Card key={link.id} className="overflow-hidden bg-card-gradient border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="relative overflow-hidden">
              <img
                src={link.thumbnail}
                alt={link.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {link.obs && (
                <div className="absolute top-3 right-3">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-amber-100/90 text-amber-700 hover:bg-amber-200/90 border-amber-300 backdrop-blur-sm shadow-md"
                      >
                        <ExclamationTriangleIcon className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="rounded-xl">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-blue-900">{link.title}</AlertDialogTitle>
                        <AlertDialogDescription className="text-blue-700">
                          {link.obs}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction className="bg-button-gradient hover:bg-button-gradient-hover">Entendi</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}
            </div>
            
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold text-blue-900 leading-tight">
                {link.title}
              </CardTitle>
              <CardDescription className="text-blue-600 leading-relaxed">
                {link.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0 pb-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-300 px-3 py-1 rounded-full font-medium">
                  {link.category}
                </Badge>
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <div className="flex gap-2 w-full">
                <Button
                  className="flex-1 bg-button-gradient hover:bg-button-gradient-hover text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-semibold"
                  onClick={() => handleDownload(link.url)}
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download
                </Button>
                {link.urlvideo && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                      >
                        <PlayIcon className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full">
                      <DialogHeader>
                        <DialogTitle className="text-blue-900">Tutorial - {link.title}</DialogTitle>
                        <DialogDescription className="text-blue-700">
                          Assista ao tutorial de instalação e configuração
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video w-full">
                        <iframe
                          src={link.urlvideo}
                          title={`Tutorial ${link.title}`}
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
        </div>
        
        {/* Footer */}
        <Card className="mt-12 bg-white/60 backdrop-blur-sm border-blue-200">
          <CardContent className="py-6">
            <div className="text-center">
              <p className="text-blue-600 text-sm">
                &copy; 2024 Pandora Support. Todos os direitos reservados.
              </p>
            </div>
          </CardContent>
        </Card>
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

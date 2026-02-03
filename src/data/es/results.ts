import { Bug, TrendingUp, Clock, Scale, ShieldCheck, CircleDollarSign, BrainCog, TrendingDown, ArrowUp, ChevronUp, Plus, DollarSign } from '@lucide/astro'

export const commonTexts = {
    title: 'Resultados Tangibles para su Empresa',
    subtitle: 'Nuestra plataforma no solo gestiona, transforma. Vea el impacto real que hemos generado en organizaciones líderes a través de la optimización.',
    h2: '¿Cómo logramos estos números?',
    description: 'Nuestra metodología combina algoritmos avanzados con infraestructura elástica para entregar resultados desde el primer día.'
}

export const stats = [
  {
    title: "Reducción de Errores",
    value: "60%",
    description: "Menos incidentes",
    icon: Bug,
    trendIcon: TrendingDown,
  },
  {
    title: "Productividad",
    value: "45%",
    description: "Mayor eficiencia",
    icon: TrendingUp,
    trendIcon: ArrowUp,
  },
  {
    title: "Ahorro de Tiempo",
    value: "30%",
    description: "Más velocidad",
    icon: Clock,
    trendIcon: ChevronUp,
  },
  {
    title: "Retorno de Inversión",
    value: "3x",
    description: "ROI anual promedio",
    icon: CircleDollarSign,
    trendIcon: Plus,
  },
];

export const grafic = {
    title: "Análisis de Crecimiento",
    value: "+120%",
    description: "Eficiencia operativa acumulada (Últimos 7 meses)",
    improvement: "+15% vs mes anterior",
    months: [
       "Ene",
       "Feb",
       "Mar",
       "Abr",
       "May",
       "Jun",
        "Jul",
    ]
}

export const features = [
  {
    title: "Automatización Inteligente",
    description:
      "Elimine tareas manuales repetitivas y propensas a errores humanos.",
    icon: BrainCog,
  },
  {
    title: "Escalabilidad Sin Límites",
    description:
      "Infraestructura que crece automáticamente con la demanda de su negocio.",
    icon: Scale,
  },
  {
    title: "Seguridad Robusta",
    description:
      "Protección de datos de nivel empresarial con cumplimiento normativo integrado.",
    icon: ShieldCheck,
  },
];

export const cta = {
    title: 'Comienza a optimizar hoy',
    description: 'Únete a las empresas que ya han transformado su gestión en la nube y están viendo resultados inmediatos.',
    buttonWhatsapp: 'Cotiza por WhatsApp'
}

import { Mail, Phone } from '@lucide/astro'

export const commonTexts = {
    title: '¿Tienes alguna pregunta?',
    description: 'Estamos aquí para ayudar. Ponte en contacto con nuestro equipo de soporte, ventas o visítanos en nuestras oficinas.'
}

export const form = {
    fields: [
        {         
            label: 'Nombre Completo',
            placeholder: 'Juan Pérez',
            type: 'text'
        },
        {         
            label: 'Correo Corporativo',
            placeholder: 'juan@correo.com',
            type: 'email'
        },
    ],
    labelSubject: 'Asunto',
    selectedOption: 'Selecciona un área',
    options: [
        {
            value: 'development',
            name: 'Desarrollo de software'
        },
        {
            value: 'automation',
            name: 'Automatización'
        },
        {
            value: 'maintenance',
            name: 'Mantenimiento'
        },
        {
            value: 'other',
            name: 'Otro'
        },
    ],
    labelMessage: 'Mensaje',
    placeholderMessage: 'Cuéntanos como podemos ayudarte'
} as const;

export const contactInfo = {
    title: 'Información de contacto',
    options: [
        {
            icon: Mail,
            name: 'Correo electrónico',
            contact: 'optimaxai@gmail.com',
            href: 'mailto:optimaxai@gmail.com',
            description: 'Soporte 24/7'
        },
        {
            icon: Phone,
            name: 'Teléfono',
            contact: '+57 (310) 0000000',
            href: 'tel:+573100000000',
            description: 'Lun-Vie de 9am a 6pm'
        },
    ],
    // iconLocation: '',
    // nameLocation: 'Oficinas',
    // descriptionLocation: ''
}
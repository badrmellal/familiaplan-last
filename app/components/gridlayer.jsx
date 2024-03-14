
import { CalendarDaysIcon, ClipboardDocumentListIcon, ChatBubbleBottomCenterTextIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Interface intuitive',
    description:
      "un seul coup d'œil suffit pour tout voir pour plus de sérénité et moins de stress.",
    icon: DevicePhoneMobileIcon ,
  },
  {
    name: 'Listes de tâches collaboratives',
    description:
      'Créez des listes pour chaque membre de la famille, attribuez clairement les responsabilités.',
    icon: ClipboardDocumentListIcon ,
  },
  {
    name: 'Calendrier familial partagé',
    description:
      "Consultez la disponibilité de chacun et évitez les conflits d'horaire.",
    icon: CalendarDaysIcon ,
  },
  {
    name: 'Espace de communication',
    description:
      "Plus qu'une to do list, Familia Plan est un espace de partage qui renforce les liens familiaux.",
    icon: ChatBubbleBottomCenterTextIcon ,
  },
]

export default function Gridlayer() {
  return (
    <div className= "sm:py-14 py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Téléchargez FamiliaPlan et gagnez 1 heure de temps gratuit par jour
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Oubliez les post-its éparpillés et les calendriers surchargés. Avec FamiliaPlan, centralisez tout ce dont votre famille a besoin pour une harmonie parfaite.          
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))} 
          </dl>
        </div>
      </div>
    </div>
  )
}

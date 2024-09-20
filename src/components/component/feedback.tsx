import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaWrench, FaLaptop, FaCamera } from 'react-icons/fa';

function getInitials(name: string) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return initials;
}

const serviceIcons: Record<string, JSX.Element> = {
  manutenção: <FaWrench className="w-5 h-5 text-primary-foreground" />,
  desenvolvimento: <FaLaptop className="w-5 h-5 text-primary-foreground" />,
  fotografia: <FaCamera className="w-5 h-5 text-primary-foreground" />,
};

interface FeedbackProps {
  name: string;
  serviceType: 'manutenção' | 'desenvolvimento' | 'fotografia';
  description: string;
  stars: number
}

export function Feedback({ name, serviceType, description, stars }: FeedbackProps) {

  const renderStars = (stars: number) => {
    const totalStars = 5;
    const filledStars = Array(stars).fill(<StarIcon className="w-4 h-4 fill-primary" />);
    const emptyStars = Array(totalStars - stars).fill(
      <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
    );
    return [...filledStars, ...emptyStars];
  };

  return (
    <Card className="w-full p-6 grid border-none shadow-none">
      <div className="flex items-start gap-4">
        <div className="bg-primary rounded-2xl p-2 flex items-center justify-center">{serviceIcons[serviceType]}</div>
        <div className="grid gap-2 flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt={name} />
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <div className="font-medium">{name}</div>
                <div className="text-xs text-muted-foreground">
                  {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              {renderStars(stars)}
            </div>
          </div>
          <div className="text-lg leading-loose text-muted-foreground font-medium">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

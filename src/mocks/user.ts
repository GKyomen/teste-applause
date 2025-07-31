export interface User {
  id: number;
  name: string;
  avatar: string;
  score: number;
  canClaimExperience: boolean;
}

export const mockUser: User = {
  id: 1,
  name: "Carlos Eduardo Correa",
  avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  score: 450,
  canClaimExperience: true
};

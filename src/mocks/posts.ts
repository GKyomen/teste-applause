export interface Post {
  id: number;
  authorName: string;
  authorAvatar: string;
  recipientName: string;
  recipientAvatar: string;
  type: string;
  emoji: string;
  date: string;
  text: string;
  image?: string;
}

export const mockPosts: Post[] = [
  {
    "id": 1,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "😍 Impressionante!",
    "emoji": "😍",
    "date": "2025-06-01T09:10:00Z",
    "text": "Excelente trabalho na apresentação para o cliente!",
    "image": "https://images.unsplash.com/photo-1612831455540-07bb7b8b724e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 2,
    "authorName": "Thainá Ricarte",
    "authorAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "recipientName": "Rafael Hans",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "type": "🙏 Obrigado!",
    "emoji": "🙏",
    "date": "2025-06-02T10:15:00Z",
    "text": "Obrigada pela ajuda na entrega do relatório.",
    "image": "https://images.unsplash.com/photo-1602526216345-84f9f7f243b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 3,
    "authorName": "Rafael Hans",
    "authorAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "🙌 Bom trabalho!",
    "emoji": "🙌",
    "date": "2025-06-03T14:20:00Z",
    "text": "Ótima liderança no projeto de integração.",
    "image": "https://images.unsplash.com/photo-1600180758890-4fcba1f4c17d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 4,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Rafael Hans",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "type": "✨ Extraordinário!",
    "emoji": "✨",
    "date": "2025-06-04T11:30:00Z",
    "text": "Sua dedicação no fechamento do trimestre foi essencial!",
    "image": "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 5,
    "authorName": "Thainá Ricarte",
    "authorAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "😍 Impressionante!",
    "emoji": "😍",
    "date": "2025-06-05T13:45:00Z",
    "text": "Parabéns pela inovação no processo de onboarding.",
    "image": "https://images.unsplash.com/photo-1601758174640-bb0c0a59f3e2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 6,
    "authorName": "Rafael Hans",
    "authorAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "🙏 Obrigado!",
    "emoji": "🙏",
    "date": "2025-06-06T15:50:00Z",
    "text": "Agradeço pelo suporte técnico na última reunião.",
    "image": "https://images.unsplash.com/photo-1616448622539-0cfb7239c7aa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 7,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Rafael Hans",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "type": "🙌 Bom trabalho!",
    "emoji": "🙌",
    "date": "2025-06-07T09:25:00Z",
    "text": "Ótima apresentação no workshop de tecnologia.",
    "image": "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 8,
    "authorName": "Thainá Ricarte",
    "authorAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "recipientName": "Rafael Hans",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "type": "✨ Extraordinário!",
    "emoji": "✨",
    "date": "2025-06-08T12:40:00Z",
    "text": "Sua colaboração foi essencial para o sucesso do evento.",
    "image": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 9,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "😍 Impressionante!",
    "emoji": "😍",
    "date": "2025-06-09T08:55:00Z",
    "text": "Parabéns pelo excelente desempenho no treinamento.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 10,
    "authorName": "Rafael Hans",
    "authorAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "🙏 Obrigado!",
    "emoji": "🙏",
    "date": "2025-06-10T10:10:00Z",
    "text": "Obrigado pelo suporte na integração de sistemas.",
    "image": "https://images.unsplash.com/photo-1526401281623-3f20ded6b5c1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 11,
    "authorName": "Thainá Ricarte",
    "authorAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "🙌 Bom trabalho!",
    "emoji": "🙌",
    "date": "2025-06-11T11:15:00Z",
    "text": "Ótima análise de dados para o relatório mensal.",
    "image": "https://images.unsplash.com/photo-1531497865147-6e85e04ac58b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 12,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "✨ Extraordinário!",
    "emoji": "✨",
    "date": "2025-06-12T09:50:00Z",
    "text": "Contribuição incrível no desenvolvimento da nova feature.",
    "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 13,
    "authorName": "Rafael Hans",
    "authorAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "😍 Impressionante!",
    "emoji": "😍",
    "date": "2025-06-13T14:05:00Z",
    "text": "Parabéns pelo design da nova interface!",
    "image": "https://images.unsplash.com/photo-1564869735327-d9f5d6ce8de5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 14,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Rafael Hans",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "type": "🙏 Obrigado!",
    "emoji": "🙏",
    "date": "2025-06-14T15:20:00Z",
    "text": "Obrigado por ajudar na revisão do código.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 15,
    "authorName": "Thainá Ricarte",
    "authorAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "🙌 Bom trabalho!",
    "emoji": "🙌",
    "date": "2025-06-15T10:30:00Z",
    "text": "Ótima facilitação na reunião de equipe.",
    "image": "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 16,
    "authorName": "Rafael Hans",
    "authorAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "✨ Extraordinário!",
    "emoji": "✨",
    "date": "2025-06-16T14:10:00Z",
    "text": "Participação brilhante no hackathon interno.",
    "image": "https://images.unsplash.com/photo-1542224566-0d62b98f1388?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 17,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Rafael Hans",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "type": "😍 Impressionante!",
    "emoji": "😍",
    "date": "2025-06-17T12:45:00Z",
    "text": "Parabéns pela proposta criativa para o novo produto.",
    "image": "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 18,
    "authorName": "Thainá Ricarte",
    "authorAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "🙏 Obrigado!",
    "emoji": "🙏",
    "date": "2025-06-18T09:35:00Z",
    "text": "Obrigado pelo compartilhamento de conhecimento no treinamento.",
    "image": "https://images.unsplash.com/photo-1603575448855-39e33d6c23ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 19,
    "authorName": "Rafael Hans",
    "authorAvatar": "https://randomuser.me/api/portraits/men/10.jpg",
    "recipientName": "Carlos Eduardo Correa",
    "recipientAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "type": "🙌 Bom trabalho!",
    "emoji": "🙌",
    "date": "2025-06-19T11:25:00Z",
    "text": "Ótima organização do cronograma do projeto.",
    "image": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": 20,
    "authorName": "Carlos Eduardo Correa",
    "authorAvatar": "https://randomuser.me/api/portraits/men/14.jpg",
    "recipientName": "Thainá Ricarte",
    "recipientAvatar": "https://randomuser.me/api/portraits/women/12.jpg",
    "type": "✨ Extraordinário!",
    "emoji": "✨",
    "date": "2025-06-20T14:50:00Z",
    "text": "Contribuição incrível no sprint de inovação.",
    "image": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  }
];

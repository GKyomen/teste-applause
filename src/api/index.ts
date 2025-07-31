import { User, mockUser, Post, mockPosts, Recipient, mockRecipients } from '../mocks';
export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  hasMore: boolean;
}

export const fetchUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 1000);
  });
};

export const fetchRecipients = (): Promise<Recipient[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRecipients);
    }, 1000);
  });
};

export const fetchPosts = (page: number = 1, limit: number = 5): Promise<PaginatedResponse<Post>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      const data = mockPosts.slice(startIndex, endIndex);
      const totalPages = Math.ceil(mockPosts.length / limit);
      const hasMore = page < totalPages;

      resolve({
        data,
        page,
        totalPages,
        hasMore
      });
    }, 1000);
  });
};

export const createPosts = (recipients: Recipient[], message: string): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPosts: Post[] = recipients.map((recipient, index) => {
        const newId = mockPosts.length + index + 1;
        const newPost: Post = {
          id: newId,
          authorName: mockUser.name,
          authorAvatar: mockUser.avatar,
          recipientName: recipient.name,
          recipientAvatar: recipient.avatar,
          type: "😍 Impressionante!",
          emoji: "😍",
          date: new Date().toISOString(),
          text: message,
        };
        return newPost;
      });
      
      mockPosts.push(...newPosts);
      resolve(newPosts);
    }, 500);
  });
};

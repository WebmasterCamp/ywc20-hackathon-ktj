"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Tool = {
  id: number;
  name: string;
  image: string;
  category: string;
  dailyPrice: number;
  weeklyPrice?: number;
  description?: string;
  rating: number;
  stock: number;
  specifications?: Record<string, string>;
}

type CartItem = Tool & {
  rentalDuration: number;
  rentalType: 'day' | 'week';
}

type CompareState = {
  compareItems: Tool[];
  addToCompare: (tool: Tool) => void;
  removeFromCompare: (id: number) => void;
  clearCompare: () => void;
}

type CartState = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItem: (id: number, updates: Partial<CartItem>) => void;
  clearCart: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set) => ({
      compareItems: [],
      addToCompare: (tool) => set((state) => {
        // Don't add if already exists
        if (state.compareItems.some(item => item.id === tool.id)) {
          return state;
        }
        
        // Only keep up to 3 items
        if (state.compareItems.length >= 3) {
          return state;
        }
        
        return { compareItems: [...state.compareItems, tool] };
      }),
      removeFromCompare: (id) => set((state) => ({
        compareItems: state.compareItems.filter(item => item.id !== id)
      })),
      clearCompare: () => set({ compareItems: [] })
    }),
    {
      name: 'tool-compare-storage'
    }
  )
)

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (item) => set((state) => {
        // Check if item already exists
        const existingItemIndex = state.items.findIndex(i => i.id === item.id);
        
        if (existingItemIndex >= 0) {
          // Update existing item
          const newItems = [...state.items];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            rentalDuration: item.rentalDuration,
            rentalType: item.rentalType
          };
          return { items: newItems };
        }
        
        // Add new item
        return { items: [...state.items, item] };
      }),
      removeFromCart: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),
      updateCartItem: (id, updates) => set((state) => ({
        items: state.items.map(item => 
          item.id === id ? { ...item, ...updates } : item
        )
      })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'tool-cart-storage'
    }
  )
)
import type { Supplier } from "@/types/types";
// Mock data arrays for variety
// Mock data arrays for variety
const supplierNames = [
  "Global Goods Inc.",
  "Pacific Parts Co.",
  "Eastern Essentials Ltd.",
  "Apex Supply Solutions",
  "Prime Distribution Group",
  "Unity Logistics Corp.",
  "Future Innovations Ltd.",
  "Dynamic Resources LLC",
  "Veridian Ventures",
  "Summit Procurement",
];

const addresses = [
  "1-1-1 Business Park, Tokyo",
  "2-3-4 Industrial Zone, Osaka",
  "5-6-7 Commerce District, Kyoto",
  "8-9-0 Port Area, Nagoya",
  "10-11-12 Tech Hub, Fukuoka",
  "13-14-15 Central Street, Yokohama",
  "16-17-18 Old Town Rd, Sapporo",
  "19-20-21 Riverside Plaza, Kobe",
  "22-23-24 Innovation Campus, Hiroshima",
  "25-26-27 Coastal Road, Okinawa",
];

// Helper function to generate a random phone number
function generatePhoneNumber(): string {
  const prefix = ["080", "090", "070"][Math.floor(Math.random() * 3)];
  const middle = Math.floor(1000 + Math.random() * 9000).toString();
  const suffix = Math.floor(1000 + Math.random() * 9000).toString();
  return `${prefix}-${middle}-${suffix}`;
}

// Helper function to generate random dates within a reasonable range
function generateRandomDates(): { createdAt: string; updatedAt: string } {
  const now = new Date();
  // created_at: within the last 2 years
  const createdBeforeMs = now.getTime() - Math.random() * 2 * 365 * 24 * 60 * 60 * 1000;
  const createdAt = new Date(createdBeforeMs);

  // updated_at: after created_at, up to now
  const updatedAfterMs = createdAt.getTime() + Math.random() * (now.getTime() - createdAt.getTime());
  const updatedAt = new Date(updatedAfterMs);

  return {
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}

// Function to generate mock supplier data
function generateMockSuppliers(count: number): Supplier[] {
  const mockData: Supplier[] = [];
  for (let i = 1; i <= count; i++) {
    const { createdAt, updatedAt } = generateRandomDates();
    mockData.push({
      id: i,
      name: supplierNames[Math.floor(Math.random() * supplierNames.length)],
      address: addresses[Math.floor(Math.random() * addresses.length)],
      phone_number: generatePhoneNumber(),
      created_at: createdAt,
      updated_at: updatedAt,
      has_active_order: Math.random() > 0.5, // Randomly assign true or false (50% chance)
    });
  }
  return mockData;
}

// Generate 50 mock supplier entries
export const mockSuppliersData: Supplier[] = generateMockSuppliers(50);

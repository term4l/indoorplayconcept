/**
 * Kalkulator ROI – czysta logika przeniesiona 1:1 z wtyczki ipc-roi-calculator.js
 * (te same wzory, zaokrąglenia i formatowanie wyników).
 */

export const ROI_FIELDS = [
  "population",
  "visitors_percent",
  "ticket_price",
  "additional_revenue",
  "parties_per_month",
  "kids_per_party",
  "birthday_ticket",
  "birthday_upsell",
  "area",
  "rent_per_m2",
  "staff_hourly",
  "daily_hours",
  "employees",
  "working_days",
  "utilities",
  "equipment_cost",
  "lease_months",
  "annual_interest",
] as const;

export type RoiField = (typeof ROI_FIELDS)[number];

/** Surowe wartości pól (string z <input type="number">, pusty = 0). */
export type RoiInputs = Record<RoiField, string>;

export type RoiResults = {
  monthlyVisitors: number;
  monthlyRevenue: number;
  monthlyBirthdayRevenue: number;
  totalMonthlyCost: number;
  monthlyProfit: number;
  /** Infinity, gdy wynik miesięczny <= 0. */
  paybackPeriodMonths: number;
};

export const emptyRoiInputs = (): RoiInputs =>
  Object.fromEntries(ROI_FIELDS.map((k) => [k, ""])) as RoiInputs;

export function toNumber(v: string | number): number {
  let value: string | number = v;
  if (typeof value === "string") {
    value = value.trim();
    if (value === "") return 0;
  }
  const n = Number(value);
  return isFinite(n) ? n : 0;
}

export function calculateRoi(inputs: RoiInputs): RoiResults {
  const n = (k: RoiField) => toNumber(inputs[k]);

  const pop = n("population");
  const perc = n("visitors_percent");
  const price = n("ticket_price");
  const add = n("additional_revenue");

  const ppm = n("parties_per_month");
  const kpp = n("kids_per_party");
  const bt = n("birthday_ticket");
  const bupk = n("birthday_upsell");

  const a = n("area");
  const rent = n("rent_per_m2");
  const wage = n("staff_hourly");
  const hours = n("daily_hours");
  const emp = n("employees");
  const days = n("working_days");
  const utils = n("utilities");

  const equip = n("equipment_cost");
  const months = n("lease_months");
  const interest = n("annual_interest");

  const monthlyVisitors = pop * (perc / 100);
  const monthlyRevenueBase = monthlyVisitors * (price + add);

  const revenuePerParty = kpp * (bt + bupk);
  const monthlyBirthdayRevenue = ppm * revenuePerParty;

  const monthlyRevenue = monthlyRevenueBase + monthlyBirthdayRevenue;

  const rentCost = a * rent;
  const staffCost = wage * hours * emp * days;

  // Rata leasingu (annuitet); bez oprocentowania – równe raty.
  let monthlyLease = 0;
  if (months > 0 && interest > 0) {
    const r = interest / 12 / 100;
    monthlyLease = (equip * r) / (1 - Math.pow(1 + r, -months));
  } else if (months > 0) {
    monthlyLease = equip / months;
  }

  const totalMonthlyCost = rentCost + staffCost + utils + monthlyLease;
  const monthlyProfit = monthlyRevenue - totalMonthlyCost;
  const paybackPeriodMonths = monthlyProfit > 0 ? equip / monthlyProfit : Infinity;

  return {
    monthlyVisitors,
    monthlyRevenue,
    monthlyBirthdayRevenue,
    totalMonthlyCost,
    monthlyProfit,
    paybackPeriodMonths,
  };
}

export const PAYBACK_UNAVAILABLE = "Niedostępny (ujemny wynik)";
export const MONTHS_SUFFIX = "miesięcy";

export function formatInt(n: number): string {
  return Math.round(n).toLocaleString("pl-PL");
}

export function formatFloat(n: number, digits: number): string {
  if (!isFinite(n)) return "—";
  return n.toFixed(digits);
}

export function formatPayback(months: number): string {
  return months === Infinity ? PAYBACK_UNAVAILABLE : `${formatFloat(months, 1)} ${MONTHS_SUFFIX}`;
}

/** Teksty wyników dokładnie tak, jak wyświetlał je oryginalny skrypt. */
export function formatRoiResults(r: RoiResults) {
  return {
    monthlyVisitors: formatInt(r.monthlyVisitors),
    monthlyRevenue: formatInt(r.monthlyRevenue),
    monthlyBirthdayRevenue: formatInt(r.monthlyBirthdayRevenue),
    totalMonthlyCost: formatInt(r.totalMonthlyCost),
    monthlyProfit: formatInt(r.monthlyProfit),
    payback: formatPayback(r.paybackPeriodMonths),
    profitNegative: r.monthlyProfit < 0,
  };
}

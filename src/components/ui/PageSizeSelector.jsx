import React from "react";

/**
 * PageSizeSelector - Selector reutilizable para elegir cantidad de ítems por página
 * @param {number} pageSize - Valor actual
 * @param {function} setPageSize - Setter para cambiar el valor
 * @param {number[]} options - Opciones disponibles (por defecto [6,12,24])
 * @param {string} className - Clases personalizadas
 */
export default function PageSizeSelector({
  pageSize,
  setPageSize,
  options = [4, 8, 12],
  className = "",
}) {
  return (
    <div
      className={`mb-2 flex items-center justify-end gap-1 md:mb-4 md:gap-2 ${className}`}
    >
      <label
        htmlFor="page-size"
        className="rounded bg-slate-800/90 px-1.5 py-0.5 text-xs text-white shadow-sm md:px-2 md:py-1 md:text-sm"
      >
        Items:
      </label>
      <select
        id="page-size"
        className="rounded bg-slate-800/90 px-1.5 py-0.5 text-xs text-white shadow-sm md:px-2 md:py-1 md:text-sm"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

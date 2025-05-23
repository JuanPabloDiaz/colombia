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
    <div className={`mb-4 flex items-center justify-end gap-2 ${className}`}>
      <label htmlFor="page-size" className="text-sm rounded bg-slate-800 px-2 py-1 text-white">
        Items por página:
      </label>
      <select
        id="page-size"
        className="rounded bg-slate-800 px-2 py-1 text-white"
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

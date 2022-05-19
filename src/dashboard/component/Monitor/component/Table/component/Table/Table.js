import React from "react";
import "./Table.css";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { useMemo } from "react";
import { COLUMNS } from "./COLUMNS";
import GlobalFilter from "./GlobalFilter";
import upsort from "./up_sort.png";
import downsort from "./down_sort.png";

export default function Table(props) {
  const columns = useMemo(() => COLUMNS, []);
  const data = props.sentdata;
  // const defaultstatetable = useMemo(() => {
  //   return { Filter: "ColumnFilter" };
  // }, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data /*defaultstatetable*/ },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={columns} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                  {columns.render("Header")}

                  <img
                    src={
                      columns.isSorted
                        ? columns.isSortedDesc
                          ? upsort
                          : downsort
                        : ""
                    }
                    alt=""
                  />
                  <div>
                    {columns.canFilter ? columns.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

import React from "react";
import "./Table.css";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { useMemo } from "react";
import { COLUMNS } from "./COLUMNS";
import GlobalFilter from "./GlobalFilter";
import upsort from "./up_sort.png";
import downsort from "./down_sort.png";
import nextpage from "./nextpage.svg";
import prevpage from "./prevpage.svg";

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
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    { columns, data /*defaultstatetable*/ },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  const { globalFilter } = state;

  return (
    <div className="the-table">
      <button
        className="previouspage"
        onClick={previousPage}
        style={{ display: canPreviousPage ? "inline" : "none" }}
      >
        <img src={prevpage} alt="PrevPage" />
      </button>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                  {columns.render("Header")}

                  <img
                    className="sortingbutton"
                    style={{ display: columns.isSorted ? "inline" : "none" }}
                    src={
                      columns.isSorted
                        ? columns.isSortedDesc
                          ? upsort
                          : downsort
                        : ""
                    }
                    alt=""
                  />

                  <div className="filter-bar">
                    {columns.canFilter ? columns.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
      </table>{" "}
      <button
        style={{ display: canNextPage ? "inline" : "none" }}
        className="nextpage"
        onClick={nextPage}
      >
        <img src={nextpage} alt="NextPage" />
      </button>
    </div>
  );
}

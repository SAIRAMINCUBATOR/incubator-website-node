import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../ui/data-table/data-column-header";
import { FormatDate } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { RequestData } from "@/schema";
import { useSession } from "@/components/providers/context/SessionContext";
import { CopyRight, Patent, TradeMark } from "@prisma/client";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const startUpDataColumn: ColumnDef<RequestData>[] = [
  {
    id: "#",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="S.No." />;
    },
    cell: ({ row }) => {
      return <div className="text-center font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        //@ts-ignore
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("name")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "dateOfRegistration",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Date of Registration" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {FormatDate(row.getValue("dateOfRegistration"))}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(FormatDate(row.getValue(id)));
    },
  },
  {
    accessorKey: "dateOfIncorporation",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Date of Incorporation" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {FormatDate(row.getValue("dateOfIncorporation"))}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(FormatDate(row.getValue(id)));
    },
  },
  {
    accessorKey: "isOperational",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Is Operational?" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("isOperational") ? "Yes" : "No"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id) ? "Yes" : "No");
    },
  },
  {
    accessorKey: "yearsOfIncorporation",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Years of Incorporation" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("yearsOfIncorporation")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "RegistrationNo",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Registration No." />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("RegistrationNo")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "ContactPerson",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Contact Person" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("ContactPerson")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        <a href={`mailto:${row.getValue("email")}`}>{row.getValue("email")}</a>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "mobile",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Mobile" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        <a href={`tel:${row.getValue("mobile")}`}>{row.getValue("mobile")}</a>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "website",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Website" />;
    },
    cell: ({ row }) => {
      const website = row.getValue("website") as string;
      const validUrl =
        website.startsWith("http://") || website.startsWith("https://")
          ? website
          : `https://${website}`;

      return (
        <a href={validUrl} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "isGraduatedFromIncubation",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Graduated From Incubation?"
        />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("isGraduatedFromIncubation") ? "Yes" : "No"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id) ? "Yes" : "No");
    },
  },
  {
    accessorKey: "dateOfGraduation",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Date of Graduation" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {FormatDate(row.getValue("dateOfGraduation"))}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(FormatDate(row.getValue(id)));
    },
  },
  {
    accessorKey: "isSignedInvestment",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Signed Investment?" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("isSignedInvestment") ? "Yes" : "No"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id) ? "Yes" : "No");
    },
  },
  {
    accessorKey: "investmentFile",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Investment File" />;
    },
    cell: ({ row }) => {
      const { token } = useSession();
      return (
        <div className="text-center font-medium">
          {token && row.getValue("investmentFile") ? (
            <a href={row.getValue("investmentFile")} target="_blank">
              View Investment File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "isInvestedInIncubation",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Invested in Incubation?"
        />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("isInvestedInIncubation") ? "Yes" : "No"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id) ? "Yes" : "No");
    },
  },
  {
    accessorKey: "investedInIncubationFile",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Invested in Incubation File"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("investedInIncubationFile") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Invested in Incubation File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "quantumOfInvestment",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Quantum of Investment" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("quantumOfInvestment")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "quantumOfInvestmentFile",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Quantum of Investment File"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("quantumOfInvestmentFile") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Quantum of Investment File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "sourceOfInvestment",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Source of Investment" />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("sourceOfInvestment")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "sourceOfInvestmentFile",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Source of Investment File"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("sourceOfInvestmentFile") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Source of Investment File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "hasRaisedFollowingAmount",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Has Raised Following Amount?"
        />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("hasRaisedFollowingAmount") ? "Yes" : "No"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id) ? "Yes" : "No");
    },
  },
  {
    accessorKey: "hasRaisedFollowingAmountFile",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Has Raised Following Amount File"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("hasRaisedFollowingAmountFile") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Raised Following Amount File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "quantumOfRaisedAmount",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Quantum of Raised Amount"
        />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("quantumOfRaisedAmount")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)));
    },
  },
  {
    accessorKey: "quantumOfRaisedAmountFile",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Quantum of Raised Amount File"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("quantumOfRaisedAmountFile") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Quantum of Raised Amount File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "hasCrossed1CrAmount",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Has Crossed 1 Cr Amount?"
        />
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("hasCrossed1CrAmount") ? "Yes" : "No"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id) ? "Yes" : "No");
    },
  },
  {
    accessorKey: "hasCrossed1CrAmountFile",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Has Crossed 1 Cr Amount File"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("hasCrossed1CrAmountFile") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Crossed 1 Cr Amount File
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "FinancialYear",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Financial Year" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("FinancialYear")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Institute",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Institute" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("Institute")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Role",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Role" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("Role")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "address",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Address" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("address")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "sector",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Sector" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("sector")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "sdgGoal",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="SDG Goal" />;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {(row.getValue("sdgGoal") as string[])?.join(", ")}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.some((goal) =>
        (row.getValue("sdgGoal") as string[])?.includes(goal)
      );
    },
  },

  {
    accessorKey: "incorporationCertificate",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Incorporation Certificate"
        />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("incorporationCertificate") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Incorporation Certificate
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "udayamCertificate",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Udayam Certificate" />
      );
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("udayamCertificate") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View Udayam Certificate
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "MOU",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="MOU" />;
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("MOU") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View MOU
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "ITR",
    enableHiding: false,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="ITR" />;
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("ITR") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View ITR
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "DPIIT",
    enableHiding: false,

    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="DPIIT" />;
    },
    cell: ({ row }) => {
      const { token } = useSession();
      const fileUrl = row.getValue("DPIIT") as string;

      return (
        <div className="text-center font-medium">
          {token && fileUrl ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View DPIIT
            </a>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id : "PatentNumber",
    accessorKey: "Patents",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Number Of Patents"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {(row.getValue("PatentNumber") as Patent[])?.length}
      </div>
    ),
  },
  {
    id:"PatentFile",
    accessorKey: "Patents",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Patents Files" />
    ),
    cell: ({ row }) => {
      const {token} = useSession();
      return (
        <div className="text-center font-medium">
          {token && (row.getValue("PatentFile") as Patent[])?.length > 0 ? (
            <>
              {(row.getValue("PatentFile") as Patent[])?.map((patent, index) => {
                return (
                  <a href={patent.file} target="_blank">
                    {`${patent.name}`}
                  </a>
                );
              })}
            </>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
  },
  {
    id: "Copyrightnumber",
    accessorKey: "CopyRights",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Number Of CopyRights"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {(row.getValue("Copyrightnumber") as string[])?.length}
      </div>
    ),
  },
  {
    id:"CopyRightsFile",
    accessorKey: "CopyRights",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CopyRights Files" />
    ),
    cell: ({ row }) => {
      const {token} = useSession();
      return (
        <div className="text-center font-medium">
          {token && (row.getValue("CopyRightsFile") as CopyRight[])?.length > 0 ? (
            <>
              {(row.getValue("CopyRightsFile") as CopyRight[])?.map((patent, index) => {
                return (
                  <a href={patent.file} target="_blank">
                    {`${patent.name}`}
                  </a>
                );
              })}
            </>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
  },
  {
    id: "numberOfTradeMarks",
    accessorKey: 'TradeMarks',
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Number Of TradeMarks"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {(row.getValue("numberOfTradeMarks") as string[])?.length}
      </div>
    ),
  },
  {
    id: "tradeMarksFiles",
    accessorKey: "TradeMarks",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TradeMarks Files" />
    ),
    cell: ({ row }) => {
      const {token} = useSession();
      return (
        <div className="text-center font-medium">
          {token && (row.getValue("tradeMarksFiles") as TradeMark[])?.length > 0 ? (
            <>
              {(row.getValue("tradeMarksFiles") as TradeMark[])?.map((patent, index) => {
                return (
                  <a href={patent.file} target="_blank">
                    {`${patent.name}`}
                  </a>
                );
              })}
            </>
          ) : (
            "N/A"
          )}
        </div>
      );
    },
  },
];

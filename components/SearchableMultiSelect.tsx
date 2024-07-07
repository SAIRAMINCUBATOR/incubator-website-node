"use client";
import React, { useEffect, useState } from "react";

import Select, { MultiValue } from "react-select";
import { useSession } from "./providers/context/SessionContext";

interface Option {
  label: string;
  value: string;
}

interface Category {
  name: string;
  id: string;
}

interface Props {
  inputOptions: Option[];
  onSelect: (value: string[]) => void;
  defaultValue?: Category[];
  disabled: boolean;
}

const createOption = (category: Category[]) => {
  return category.map((category) => ({
    label: category.name,
    value: category.id,
  }));
};

export const SearchableMultiSelect = ({
  inputOptions,
  onSelect,
  defaultValue,
  disabled,
}: Props) => {
  const { token } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<Option[]>(inputOptions);
  const [value, setValue] = useState<Option[] | null>(
    defaultValue && createOption(defaultValue)
  );

  // Filter out duplicates initially
  useEffect(() => {
    const filteredOptions = options.reduce<Option[]>((acc, option) => {
      const isDuplicate = acc.some(
        (existingOption) => existingOption.value === option.value
      );
      if (!isDuplicate) {
        acc.push(option);
      }
      return acc;
    }, []);
    // console.log(filteredOptions);
    setOptions(filteredOptions);
  }, []);

 

  const handleOnChange = (value: MultiValue<Option>) => {
    setValue(value.map((option) => option));
    onSelect(value.map((option) => option.value));
  };

  return (
    <Select
      isMulti
      form="submit"
      className="text-sm"
      placeholder={"Select SDG..."}
      isClearable
      isDisabled={isLoading || disabled}
      isLoading={isLoading}
      onChange={handleOnChange}
      options={options}
      value={value}
      maxMenuHeight={150}
    />
  );
};

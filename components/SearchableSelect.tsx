"use client";
import { Category, CategoryType } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import CreatableSelect from "react-select/creatable";
import { useSession } from "./providers/context/SessionContext";

interface Option {
  label: string;
  value: string;
}

interface Props {
  inputOptions: Option[];
  onSelect: (value: string) => void;
  defaultValue?: Category;
  disabled: boolean;
  type: CategoryType;
}

const createOption = (category: Category) => ({
  label: category.name,
  value: category.id,
});

export const SearchableSelect = ({
  inputOptions,
  onSelect,
  defaultValue,
  disabled,
  type,
}: Props) => {
  const { token } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<Option[]>(inputOptions);
  const [value, setValue] = useState<Option | null>(
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

  const handleCreate = async (inputValue: string) => {
    setIsLoading(true);
    console.log(type)
    const response = await axios.post(
      "/api/components/category",
      { name: inputValue, type },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const newOption = createOption(response.data.category);
    setOptions((prev) => [...prev, newOption]);
    setValue(newOption);
    onSelect(newOption.value);
    setIsLoading(false);
  };

  const handleOnChange = (value: Option) => {
    setValue(value);
    onSelect(value?.value);
  };

  return (
    <CreatableSelect
      form="submit"
      className="text-sm"
      placeholder={"Select Category..."}
      isClearable
      isDisabled={isLoading || disabled}
      isLoading={isLoading}
      onChange={handleOnChange}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      maxMenuHeight={150}
    />
  );
};

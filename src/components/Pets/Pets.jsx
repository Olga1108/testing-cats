import React, { useState, useEffect, createContext } from "react";

export const PetsContext = createContext({
  cats: [],
  setCats: () => {},
});
import React, { useState } from "react";
import { Button } from "@mui/material";

const Lotto = () => {
  const [numberSets, setNumberSets] = useState<number[][]>([]);

  const generateNumbers = () => {
    const generatedNumbers = new Set<number>();
    while (generatedNumbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      generatedNumbers.add(randomNumber);
    }
    setNumberSets((prevSets) => [[...generatedNumbers], ...prevSets]);
  };

  return (
    <div className="Lotto">
      <Button variant="contained" onClick={generateNumbers}>
        Generate Numbers
      </Button>
      <div>
        {numberSets.map((numbers, index) => (
          <div key={index}>
            <h5>Set {index + 1}:</h5>
            <p>{numbers.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lotto;

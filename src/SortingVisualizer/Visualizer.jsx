import React, { useState, useEffect } from 'react';
import colors from './colorCodes';
import GithubIcon from '../Icons/GithubIcon';
import { mergeSortAnimation } from '../algorithms/mergesort';
import { insertionSort } from '../algorithms/insertion';
import { selectionSort } from '../algorithms/selectionsort';
import { bubbleSort } from '../algorithms/bubblesort';
import { quicksort } from '../algorithms/quicksort';
import { heapsort } from '../algorithms/heapsort';
// stylesheet
import './SortingVisualizer.css';




// Random Number Generator
const generateRandomNumber = (i, j) => {
	return Math.floor(i + Math.random() * (j - i));
};

const Visualizer =()=>{

};
export default Visualizer;
Filtering Discs

    - Create a button to reset all filters
    	○ Flight numbers to inactive
    	○ Checkboxes to unchecked


    - Currently:
    	○ Changing sort order displays discs without accounting for filters
    		§ Idea: merge sort order and filter functions into one
    			□ Make order handler return only the array with discs in order (data only, not components)
    			□ Let this array be used by filter function
    	○ Applying filters also defaults sort order by top selling
    	○ Reset button resets state, but checkboxes and sliders, remain the same

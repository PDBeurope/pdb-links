# PDB Links

PDB Links is an AngularJS component, which can be easily included as a custom HTML element or attribute. It adds a popup containing links to all the wwPDB resources for a given PDB entry. The popup is displayed when user clicks on a hyperlink to which the component is applied. It is a part of the <a href="http://www.ebi.ac.uk/pdbe/pdb-component-library" target="_blank">PDB Component Library</a>.

![PDB Links](/assets/pdb-links.png)

##Getting Started
There are multiple ways to install the component:
**1.** Download the javascript and stylesheet files (pdb.links.bundle.min.js & pdb.links.min.css) stored in the 'build' folder. Include the files in your page <head> section. 
```html
<link rel="stylesheet" type="text/css" href="pdb.links.min.css">

<script src="pdb.links.bundle.min.js"></script>
```

To apply this component to a hyperlink, the component name is added to the class attribute of the anchor tag and the corresponding PDB ID is provided as a value to custom attribute pdb-id.
```html
<a class='pdb-links' pdb-id='1cbs' href='javascript:void(0);'>1cbs</a>
```

See the examples/main/simple.html page for more information.

**NOTE** : If you already got the dependencies (AngularJS) in your project, use the core minified version instead of the bundle. See the examples/main/core-angular.html and examples/main/core-non-angular.html page for more information.

**2.** The Component is a part of <a href="http://www.ebi.ac.uk/pdbe/pdb-component-library" target="_blank">PDB Component Library</a>. If you have installed the library then the Component is already available to use as a HTML element in your application

**3.** The Component is available as npm module - search for pdb-links or use this link
* The widget is listed on the bio.js website where you could find other interesting .js libraries for biological data

[![NPM version](http://img.shields.io/npm/v/pdb-links.svg)](https://www.npmjs.org/package/pdb-links) 

## Documentation
Please refer <a target="_blank" href="http://www.ebi.ac.uk/pdbe/pdb-component-library/doc.html#a_pdbLinks">PDB Links</a> for details about the available attributes / parameters.

## Contributing

All contributions are welcome. Please refer <a target="_blank" href="http://www.ebi.ac.uk/pdbe/pdb-component-library/faq.html#q6">PDB Links</a> for more details

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/PDBeurope/pdb-links/issues).
Also you can <a href="http://www.ebi.ac.uk/pdbe/about/contact" target="_blank">contact us here</a> for support, feedback or to report any issues.

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright 2015-2016 Mandar Deshpande <mandar@ebi.ac.uk>
European Bioinformatics Institute (EBI, http://www.ebi.ac.uk/)
European Molecular Biology Laboratory (EMBL, http://www.embl.de/)
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and 
limitations under the License.

const EDITORS = [
  {
    name: "Angel Lopez-Candales",
    email: "alopez-candales@usf.edu",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "cardiac stem cell; coronary origin; right ventricular function; pulmonary hypertension; echocardiography",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Fabrizio D'Ascenzo",
    email: "fabrizio.dascenzo@unito.it",
    roles: ["Section Board Member", "Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "Interventional Cardiology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Jawahar L. Mehta",
    email: "mehtajl@uams.edu",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "atherosclerosis; oxidative stress; coronary artery disease; inflammation",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Patrick W. Serruys",
    email: "patrick.w.j.c.serruys@gmail.com",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "percutaneous coronary intervention; drug-eluting stents; coronary physiology; structural heart disease",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Gary Tse",
    email: "gary.tse@kmms.ac.uk",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "cardiac electrophysiology; electrocardiography; atrial fibrillation; sudden cardiac death",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Maciej Banach",
    email: "maciejbanach@aol.co.uk",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "dyslipidemia; statins; atherosclerosis; preventive cardiology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Francesco Versaci",
    email: "francesco.versaci@uniroma2.it",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "interventional cardiology; acute coronary syndrome; coronary stents",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Teruhiko Imamura",
    email: "teimamu@med.u-toyama.ac.jp",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "heart failure; mechanical circulatory support; ventricular assist device; hemodynamics",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Gianfranco Mitacchione",
    email: "gianfranco.mitacchione@asst-spedalicivili.it",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "cardiac pacing; leadless pacemaker; heart failure; device therapy",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Gianluca Campo",
    email: "cmpglc@unife.it",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "acute coronary syndrome; antithrombotic therapy; percutaneous coronary intervention",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Francesco Pelliccia",
    email: "f.pelliccia@uniroma1.it",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "takotsubo syndrome; coronary spasm; ischemic heart disease; cardiac imaging",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Gani Bajraktari",
    email: "gani.bajraktari@uni-pr.edu",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "heart failure; echocardiography; coronary artery disease; valvular heart disease",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Fabio Mangiacapra",
    email: "f.mangiacapra@unicampus.it",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "coronary physiology; fractional flow reserve; endothelial function",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Eliano Pio Navarese",
    email: "elianonavarese@gmail.com",
    roles: ["Section Board Member", "Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "antithrombotic therapy; meta-analysis; acute coronary syndrome; lipid-lowering therapy",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Jochen Wöhrle",
    email: "jochen.woehrle@uniklinik-ulm.de",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-11-02",
    interests: "transfemoral aortic valve implantation; stroke; coronary artery disease; structural heart disease",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Giuseppe A. Barletta",
    email: "giuseppe.barletta@unifi.it",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-09-18",
    interests: "heart failure; echocardiography; diastolic function",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Matthew Budoff",
    email: "mbudoff@lundquist.org",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-01-14",
    interests: "cardiac CT; coronary calcium; atherosclerosis imaging; preventive cardiology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Krzysztof J. Filipiak",
    email: "krzysztof.filipiak@wum.edu.pl",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "hypertension; dyslipidemia; antithrombotic therapy; preventive cardiology",
    absenceDate: "2026-08-01 – 2026-08-20",
    currentJournal: true
  },
  {
    name: "Jacek Kubica",
    email: "jacek.kubica@cm.umk.pl",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-12-09",
    interests: "antiplatelet therapy; acute coronary syndrome; interventional cardiology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Tatjana Rundek",
    email: "trundek@med.miami.edu",
    roles: ["Section Board Member"],
    section: "Stroke and Cerebrovascular Disease",
    lastInviteDate: "",
    interests: "stroke; carotid ultrasound; cerebrovascular disease; cognitive impairment",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Zoltán Ruzsa",
    email: "zoltan.ruzsa@gmail.com",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-03-21",
    interests: "transradial intervention; peripheral artery disease; complex PCI",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Enrico Romagnoli",
    email: "enrico.romagnoli@unicatt.it",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "percutaneous coronary intervention; intravascular imaging; coronary physiology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Alexandros Briasoulis",
    email: "alexbriasoulis@gmail.com",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-08-30",
    interests: "advanced heart failure; mechanical circulatory support; cardio-oncology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Federica Moscucci",
    email: "federica.moscucci@uniroma1.it",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "hypertension; arterial stiffness; cardiovascular prevention; gender medicine",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Gianfranco Piccirillo",
    email: "gianfranco.piccirillo@uniroma1.it",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-02-11",
    interests: "heart rate variability; autonomic nervous system; heart failure",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Gregory Y. H. Lip",
    email: "gregory.lip@liverpool.ac.uk",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-10-07",
    interests: "atrial fibrillation; anticoagulation; thrombosis; stroke prevention",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Deepak L. Bhatt",
    email: "dlbhattmd@post.harvard.edu",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "acute coronary syndrome; antithrombotic therapy; diabetes and cardiovascular disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Roxana Mehran",
    email: "roxana.mehran@mountsinai.org",
    roles: ["Guest Editor"],
    section: "Interventional Cardiology",
    lastInviteDate: "2026-04-02",
    interests: "interventional cardiology; high bleeding risk; clinical trials; gender disparities",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Gregg W. Stone",
    email: "gregg.stone@mountsinai.org",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "percutaneous coronary intervention; transcatheter valve therapy; clinical trial design",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Antonio Colombo",
    email: "acolombo@emocolumbus.it",
    roles: ["Section Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-07-19",
    interests: "complex PCI; left main intervention; bifurcation lesions; intravascular imaging",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Marco Valgimigli",
    email: "marco.valgimigli@eoc.ch",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "antiplatelet therapy; DAPT; percutaneous coronary intervention; bleeding risk",
    absenceDate: "2026-09-01 – 2026-09-15",
    currentJournal: false
  },
  {
    name: "Stephan Windecker",
    email: "stephan.windecker@insel.ch",
    roles: ["Section Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "2026-01-28",
    interests: "coronary revascularization; TAVI; clinical guidelines; outcomes research",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Davide Capodanno",
    email: "dcapodanno@gmail.com",
    roles: ["Guest Editor"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "antithrombotic therapy; coronary stents; clinical trial methodology",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Dominick J. Angiolillo",
    email: "dominick.angiolillo@jax.ufl.edu",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-11-23",
    interests: "platelet function; P2Y12 inhibitors; thrombosis; interventional cardiology",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Holger Thiele",
    email: "holger.thiele@medizin.uni-leipzig.de",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "cardiogenic shock; mechanical circulatory support; acute myocardial infarction",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Filippo Crea",
    email: "filippo.crea@unicatt.it",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-05-06",
    interests: "coronary pathophysiology; MINOCA; inflammation; ischemic heart disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Thomas F. Lüscher",
    email: "cardio@tomluescher.ch",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "endothelial function; atherosclerosis; preventive cardiology; acute coronary syndromes",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "C. Michael Gibson",
    email: "mgibson@bidmc.harvard.edu",
    roles: ["Guest Editor"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-06-12",
    interests: "thrombolysis; clinical trials; antithrombotic therapy; digital health",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Javier Escaned",
    email: "escaned@secardiologia.es",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "coronary physiology; iFR; complex PCI; chronic total occlusion",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Corrado Tamburino",
    email: "tambucor@unict.it",
    roles: ["Section Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "2026-02-27",
    interests: "TAVI; mitral intervention; percutaneous coronary intervention",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "William Wijns",
    email: "william.wyns@nuigalway.ie",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "coronary physiology; interventional cardiology; innovation in PCI",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Nieves Gonzalo",
    email: "nieves_gonzalo@yahoo.es",
    roles: ["Guest Editor"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-09-03",
    interests: "optical coherence tomography; intravascular imaging; coronary atherosclerosis",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Giuseppe Biondi-Zoccai",
    email: "gbiondizoccai@gmail.com",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "meta-analysis; evidence-based cardiology; network meta-analysis; PCI outcomes",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Nathan D. Wong",
    email: "ndwong@uci.edu",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-03-08",
    interests: "preventive cardiology; cardiovascular epidemiology; dyslipidemia; diabetes",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Nandu Goswami",
    email: "nandu.goswami@medunigraz.at",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "heart rate variability; gravitational physiology; vascular function",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Mahboob Alam",
    email: "malam@bcm.edu",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-12-21",
    interests: "interventional cardiology; coronary artery disease; outcomes research",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Pasquale Ambrosino",
    email: "paoloambrosino@libero.it",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "pulmonary hypertension; vascular medicine; cardiovascular rehabilitation",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Jeffrey L. Anderson",
    email: "jeffrey.anderson@imail.org",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-01-05",
    interests: "clinical cardiology; genetic risk; coronary disease; anticoagulants",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Gaetano Santulli",
    email: "gsantulli001@gmail.com",
    roles: ["Section Board Member"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "",
    interests: "calcium signaling; microRNA; heart failure; diabetes and the heart",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Matteo Bertini",
    email: "matteo.bertini@unife.it",
    roles: ["Section Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "2025-10-29",
    interests: "cardiac resynchronization; ventricular arrhythmia; cardiac imaging in EP",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Martin Schweiger",
    email: "martin.schweiger@kispi.uzh.ch",
    roles: ["Section Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "",
    interests: "pediatric heart failure; ventricular assist device; congenital heart surgery",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Daniel A. Morris",
    email: "daniel-armando.morris@charite.de",
    roles: ["Editorial Board Member"],
    section: "Imaging",
    lastInviteDate: "2026-04-16",
    interests: "echocardiography; diastolic function; speckle tracking; heart failure with preserved ejection fraction",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "José A. Barrabés",
    email: "jabarrabes@vhebron.net",
    roles: ["Section Board Member"],
    section: "Acquired Cardiovascular Disease",
    lastInviteDate: "",
    interests: "acute coronary syndrome; myocardial infarction; ventricular remodeling",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Stephen Clark",
    email: "s.c.clark@ncl.ac.uk",
    roles: ["Guest Editor"],
    section: "Cardiac Surgery",
    lastInviteDate: "2025-08-14",
    interests: "cardiac surgery; heart transplantation; mechanical circulatory support",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Gianni Dall'Ara",
    email: "giannidallara@libero.it",
    roles: ["Editorial Board Member"],
    section: "Acquired Cardiovascular Disease",
    lastInviteDate: "",
    interests: "chronic total occlusion; complex PCI; coronary calcification",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Marcello Galvani",
    email: "marcelgal@yahoo.com",
    roles: ["Section Board Member"],
    section: "Acquired Cardiovascular Disease",
    lastInviteDate: "2026-02-03",
    interests: "biomarkers; acute coronary syndrome; high-sensitivity troponin",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Joshua Hutcheson",
    email: "jhutches@fiu.edu",
    roles: ["Guest Editor"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "",
    interests: "calcific aortic valve disease; biomechanics; extracellular vesicles",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Takashi Nakaoka",
    email: "nakaoka@jikei.ac.jp",
    roles: ["Editorial Board Member"],
    section: "Acquired Cardiovascular Disease",
    lastInviteDate: "2025-11-11",
    interests: "vascular biology; atherosclerosis; inflammatory vascular disease",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Carl Johann Schultz",
    email: "c.j.schultz@erasmusmc.nl",
    roles: ["Section Board Member"],
    section: "Imaging",
    lastInviteDate: "",
    interests: "cardiac CT; coronary plaque; aortic valve calcium; imaging biomarkers",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Fabrice Bauer",
    email: "fabrice.bauer@chu-rouen.fr",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-05-19",
    interests: "echocardiography; valvular heart disease; transcatheter valve therapy",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Aleš Blinc",
    email: "ales.blinc@kclj.si",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "venous thrombosis; vascular medicine; anticoagulation",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Andrew Cook",
    email: "a.cook@ucl.ac.uk",
    roles: ["Guest Editor"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "2025-07-08",
    interests: "congenital heart disease; cardiac morphology; 3D imaging",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Stavros Dimopoulos",
    email: "stdimop@gmail.com",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "cardiac rehabilitation; heart failure; cardiopulmonary exercise testing",
    absenceDate: "2026-07-10 – 2026-07-25",
    currentJournal: true
  },
  {
    name: "Fabio Guarracino",
    email: "fabiodemarco@gmail.com",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-03-30",
    interests: "cardiovascular anesthesia; echocardiography; hemodynamic monitoring",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Hideo Izawa",
    email: "izawa@fujita-hu.ac.jp",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "heart failure; cardiomyopathy; cardiac rehabilitation",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Petr Kala",
    email: "kala.petr@fnbrno.cz",
    roles: ["Guest Editor"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-12-02",
    interests: "STEMI networks; primary PCI; cardiogenic shock",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Rosario Rossi",
    email: "rossi.rosario@unimore.it",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "endothelial function; coronary microvascular dysfunction; hypertension",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Ovidio De Filippo",
    email: "ovidio.defilippo@unito.it",
    roles: ["Guest Editor"],
    section: "Interventional Cardiology",
    lastInviteDate: "2026-04-22",
    interests: "acute coronary syndromes; thrombosis; percutaneous coronary intervention",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Ali Ahmed",
    email: "ali.ahmed@va.gov",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "heart failure; geriatric cardiology; outcomes research",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Fernando Alfonso",
    email: "falf@hotmail.com",
    roles: ["Section Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-09-27",
    interests: "in-stent restenosis; OCT; coronary intervention; spontaneous coronary artery dissection",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "David Alter",
    email: "david.alter@ices.on.ca",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "cardiac rehabilitation; health services research; secondary prevention",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Michael Aschermann",
    email: "ascherm@vfn.cz",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-01-19",
    interests: "pulmonary hypertension; interventional cardiology; coronary artery disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Andrea Baggiano",
    email: "andrea.baggiano@cardiologicomonzino.it",
    roles: ["Section Board Member"],
    section: "Imaging",
    lastInviteDate: "",
    interests: "cardiac magnetic resonance; cardiomyopathies; coronary artery disease imaging",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Lucia Barbieri",
    email: "lucia.barbieri@unimi.it",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-10-15",
    interests: "acute coronary syndrome; platelet reactivity; gender differences in CAD",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Fausto Biancari",
    email: "faustobiancari@yahoo.it",
    roles: ["Editorial Board Member"],
    section: "Cardiac Surgery",
    lastInviteDate: "",
    interests: "cardiac surgery outcomes; aortic valve surgery; ECMO",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Christian W. Hamm",
    email: "christian.hamm@innere.med.uni-giessen.de",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-02-14",
    interests: "biomarkers; acute coronary syndrome; TAVI; chest pain units",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Gilles Montalescot",
    email: "gilles.montalescot@aphp.fr",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "STEMI; antithrombotic therapy; pre-hospital care; clinical trials",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "John A. Ambrose",
    email: "jamambrose@yahoo.com",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-08-05",
    interests: "atherosclerotic plaque; acute coronary syndrome; coronary thrombosis",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Ron Waksman",
    email: "ron.waksman@medstar.net",
    roles: ["Section Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "drug-eluting stents; bioresorbable scaffolds; structural heart disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Robert J. Siegel",
    email: "robert.siegel@cshs.org",
    roles: ["Editorial Board Member"],
    section: "Imaging",
    lastInviteDate: "2026-03-12",
    interests: "echocardiography; valvular heart disease; mitral regurgitation",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Jagat Narula",
    email: "narula@mountsinai.org",
    roles: ["Section Board Member"],
    section: "Imaging",
    lastInviteDate: "",
    interests: "atherosclerosis imaging; heart failure; cardiac imaging; preventive cardiology",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Y. Chandrashekhar",
    email: "shekh030@umn.edu",
    roles: ["Guest Editor"],
    section: "Imaging",
    lastInviteDate: "2025-11-30",
    interests: "cardiac imaging; ischemic heart disease; heart failure imaging",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Jeroen J. Bax",
    email: "j.j.bax@lumc.nl",
    roles: ["Editorial Board Member"],
    section: "Imaging",
    lastInviteDate: "",
    interests: "multimodality imaging; heart failure; valvular heart disease; CRT",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Victoria Delgado",
    email: "victoria.delgado@vhir.org",
    roles: ["Section Board Member"],
    section: "Imaging",
    lastInviteDate: "2026-04-09",
    interests: "echocardiography; valvular heart disease; 3D imaging; transcatheter interventions",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Patrizio Lancellotti",
    email: "plancellotti@chuliege.be",
    roles: ["Editorial Board Member"],
    section: "Imaging",
    lastInviteDate: "",
    interests: "valvular heart disease; stress echocardiography; infective endocarditis",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Bernard Iung",
    email: "bernard.iung@aphp.fr",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-06-28",
    interests: "valvular heart disease; infective endocarditis; epidemiology of valve disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Alec Vahanian",
    email: "alec.vahanian@gmail.com",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "mitral stenosis; percutaneous mitral commissurotomy; valvular guidelines",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Helmut Baumgartner",
    email: "helmut.baumgartner@ukmuenster.de",
    roles: ["Editorial Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "2026-01-07",
    interests: "adult congenital heart disease; valvular heart disease; pulmonary hypertension",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Michael A. Gatzoulis",
    email: "m.gatzoulis@rbht.nhs.uk",
    roles: ["Section Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "",
    interests: "adult congenital heart disease; tetralogy of Fallot; pulmonary hypertension",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Barbara J. M. Mulder",
    email: "b.j.mulder@amsterdamumc.nl",
    roles: ["Guest Editor"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "2025-09-09",
    interests: "adult congenital heart disease; aortopathy; pregnancy and heart disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Gerhard-Paul Diller",
    email: "gerhard.diller@ukmuenster.de",
    roles: ["Editorial Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "",
    interests: "adult congenital heart disease; machine learning; outcome prediction",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Massimo Chessa",
    email: "massimo.chessa@grupposandonato.it",
    roles: ["Section Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "2026-02-20",
    interests: "congenital interventions; structural heart disease; GUCH",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Alain Fraisse",
    email: "a.fraisse@rbht.nhs.uk",
    roles: ["Guest Editor"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "",
    interests: "pediatric interventions; pulmonary valve replacement; congenital catheterization",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Mario Carminati",
    email: "carminati.mario@gmail.com",
    roles: ["Editorial Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "2025-12-16",
    interests: "congenital heart interventions; ASD closure; pulmonary valve",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Shakeel A. Qureshi",
    email: "shakeel.qureshi@gstt.nhs.uk",
    roles: ["Section Board Member"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "",
    interests: "pediatric interventional cardiology; stenting in congenital heart disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Ziyad M. Hijazi",
    email: "zhijazi@sidra.org",
    roles: ["Guest Editor"],
    section: "Pediatric Cardiology and Congenital Heart Disease",
    lastInviteDate: "2026-03-04",
    interests: "device closure; congenital interventions; hybrid procedures",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Horst Sievert",
    email: "horstsievertmd@aol.com",
    roles: ["Editorial Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "",
    interests: "PFO closure; left atrial appendage; structural heart disease",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "David R. Holmes",
    email: "holmes.david@mayo.edu",
    roles: ["Section Board Member"],
    section: "Interventional Cardiology",
    lastInviteDate: "2025-07-22",
    interests: "left atrial appendage occlusion; interventional cardiology; atrial fibrillation",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "A. John Camm",
    email: "jcamm@sgul.ac.uk",
    roles: ["Editorial Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "",
    interests: "atrial fibrillation; antiarrhythmic drugs; sudden death; anticoagulation",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Hugh Calkins",
    email: "hcalkins@jhmi.edu",
    roles: ["Guest Editor"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "2026-04-28",
    interests: "atrial fibrillation ablation; ARVC; sudden cardiac death; syncope",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Karl-Heinz Kuck",
    email: "karl-heinz.kuck@lanserhof.com",
    roles: ["Section Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "",
    interests: "catheter ablation; atrial fibrillation; ventricular tachycardia",
    absenceDate: "2026-08-10 – 2026-08-24",
    currentJournal: true
  },
  {
    name: "Andrea Natale",
    email: "dr.natale@gmail.com",
    roles: ["Editorial Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "2025-10-21",
    interests: "atrial fibrillation ablation; complex arrhythmia; robotic ablation",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Carlo Pappone",
    email: "cpappone@af-ablation.org",
    roles: ["Guest Editor"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "",
    interests: "Wolff-Parkinson-White; AF ablation; Brugada syndrome",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Paulus Kirchhof",
    email: "p.kirchhof@uke.de",
    roles: ["Section Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "2026-01-31",
    interests: "atrial fibrillation; early rhythm control; translational electrophysiology",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Isabelle C. Van Gelder",
    email: "i.c.van.gelder@umcg.nl",
    roles: ["Editorial Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "",
    interests: "atrial fibrillation; rate vs rhythm control; heart failure and AF",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "John Camm",
    email: "john.camm@stgeorges.nhs.uk",
    roles: ["Guest Editor"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "2025-08-27",
    interests: "arrhythmia management; device therapy; clinical electrophysiology",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Silvia G. Priori",
    email: "silvia.priori@unipv.it",
    roles: ["Section Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "",
    interests: "inherited arrhythmia; channelopathies; sudden cardiac death; genetics",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Arthur A. M. Wilde",
    email: "a.a.wilde@amsterdamumc.nl",
    roles: ["Editorial Board Member"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "2026-05-13",
    interests: "inherited cardiac diseases; long QT syndrome; Brugada syndrome",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Michael J. Ackerman",
    email: "ackerman.michael@mayo.edu",
    roles: ["Guest Editor"],
    section: "Electrophysiology and Cardiovascular Physiology",
    lastInviteDate: "",
    interests: "long QT syndrome; sudden death in the young; genetic cardiology",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Perry M. Elliott",
    email: "perry.elliott@ucl.ac.uk",
    roles: ["Section Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2025-11-17",
    interests: "cardiomyopathy; hypertrophic cardiomyopathy; inherited cardiac conditions",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Iacopo Olivotto",
    email: "iacopo.olivotto@unifi.it",
    roles: ["Editorial Board Member"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "",
    interests: "hypertrophic cardiomyopathy; myosin inhibitors; sudden death risk",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Carolyn Y. Ho",
    email: "cho@bwh.harvard.edu",
    roles: ["Guest Editor"],
    section: "Cardiovascular Clinical Research",
    lastInviteDate: "2026-02-08",
    interests: "hypertrophic cardiomyopathy; genetic cardiomyopathy; family screening",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Hugh Watkins",
    email: "hugh.watkins@cardiov.ox.ac.uk",
    roles: ["Section Board Member"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "",
    interests: "genetics of cardiomyopathy; sarcomere; translational genomics",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Christine Seidman",
    email: "cseidman@genetics.med.harvard.edu",
    roles: ["Editorial Board Member"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "2025-09-14",
    interests: "genetic cardiomyopathy; sarcomere mutations; precision medicine",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Joseph C. Wu",
    email: "joewu@stanford.edu",
    roles: ["Section Board Member"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "",
    interests: "iPSC; cardiac regeneration; stem cell biology; precision medicine",
    absenceDate: "",
    currentJournal: true
  },
  {
    name: "Stefanie Dimmeler",
    email: "dimmeler@em.uni-frankfurt.de",
    roles: ["Guest Editor"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "2026-03-17",
    interests: "non-coding RNA; vascular biology; cardiac regeneration",
    absenceDate: "",
    currentJournal: false
  },
  {
    name: "Thomas Thum",
    email: "thum.thomas@mh-hannover.de",
    roles: ["Editorial Board Member"],
    section: "Basic and Translational Cardiovascular Research",
    lastInviteDate: "",
    interests: "microRNA; heart failure therapeutics; non-coding RNA",
    absenceDate: "",
    currentJournal: true
  }
];

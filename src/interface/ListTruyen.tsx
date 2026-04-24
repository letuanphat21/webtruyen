export interface ListTruyen {
  _id: string;
  name: string;
  slug: string;
  thumb_url: string;
  chapter_lates: ChapterLates[];
}

interface ChapterLates {
  chapter_name: string;
  chapter_api_data: string;
}

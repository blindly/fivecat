interface Article {
  url: string;
  favicon: string;
  title: string;
}

class Post implements Article {
  public a_tags () {
    return "class='title' target='_blank' rel='noopener'";
  }
  
  public url: string;
  public favicon: string;
  public title: string;
  
  public favicon_img () {
    return "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + this.favicon + "'/>";
  }
  
  public view () {
    return "<article><p><a " + this.a_tags + " href='" + this.url + "'>" + this.favicon_img + this.title + "</a></p></article>";
  }
}